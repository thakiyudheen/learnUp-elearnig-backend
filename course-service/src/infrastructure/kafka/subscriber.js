"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = void 0;
var consumer_1 = require("./consumer");
var blockUnblockConsumer_1 = require("./consumer/blockUnblockConsumer");
var createEnrollmentConsumer_1 = require("./consumer/createEnrollmentConsumer");
var resetPasswordConsumer_1 = require("./consumer/resetPasswordConsumer");
var createSubscriber = function () {
    return {
        userCreated: consumer_1.userCreatedConsumer,
        resetPassword: resetPasswordConsumer_1.resetPasswordConsumer,
        blockUnblockUser: blockUnblockConsumer_1.blockUnblockConsumer,
        rejectRequest: consumer_1.rejectRequestConsumer,
        verificationRequest: consumer_1.verifyRequestConsumer,
        updateUser: consumer_1.updateUserConsumer,
        createEnrollment: createEnrollmentConsumer_1.createEnrollmentConsumer,
        coursePurchaseSuccess: consumer_1.coursePurchaseSuccessConsumer
    };
};
exports.createSubscriber = createSubscriber;
