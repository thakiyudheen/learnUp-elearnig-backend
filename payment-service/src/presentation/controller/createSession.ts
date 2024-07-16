
import { IDependecies } from "@/application/Interfases/IDependencies";
import { NextFunction, Request, Response } from "express";
import Stripe from "stripe";


export const createSessinController = (dependencies: IDependecies) => {
  const { useCases: { createSessionUseCase } } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Payment session data:', req.body);

      if (!process.env.STRIPE_SECRET_KEY) {
        console.log("Stripe secret key is not found in env");
        return res.status(500).send("Internal server error: Stripe secret key is missing");
      }

      const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

      const { courseName, courseThumbnail, userId, courseId, amount, subscriptionType } = req.body;

      // Define line items based on whether subscriptionType is provided
      const data = subscriptionType ? [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: subscriptionType,
            },
            unit_amount: Math.floor(parseInt(amount) * 100),
          },
          quantity: 1,
        }
      ] : [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: courseName,
              images: [courseThumbnail],
            },
            unit_amount: Math.floor(parseInt(amount) * 100),
          },
          quantity: 1,
        }
      ];

      const successUrl = subscriptionType
      ? `https://learn-up-elearning-frontend.vercel.app/subscription-success`
      : `https://learn-up-elearning-frontend.vercel.app/payment-success`
      // ? `${process.env.FRONTEND_URL}/subscription-success`
      // : `${process.env.FRONTEND_URL}/payment-success`;

      const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: data,
        mode: "payment",
        success_url: successUrl,
        cancel_url: `https://learn-up-elearning-frontend.vercel.app/payment-failed`,
        // cancel_url: `${process.env.FRONTEND_URL}/payment-failed`,
      });

      const sessionData = subscriptionType ? { userId, sessionId: session.id, subscriptionType } : { userId, sessionId: session.id, courseId };

      const result = await createSessionUseCase(dependencies).execute(sessionData);

      return res.status(200).json({
        success: true,
        data: result,
        message: "Payment session created successfully!",
      });

    } catch (error: any) {
      next(error);
    }
  }
}
