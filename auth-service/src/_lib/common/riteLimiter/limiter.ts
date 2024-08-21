

import rateLimit from 'express-rate-limit';


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 200,
  message: 'Too many requests from this IP, please try again later.',
});

const authLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, 
  max: 5, 
  message: 'Too many login attempts from this IP, please try again later.',
});

export { apiLimiter, authLimiter };
