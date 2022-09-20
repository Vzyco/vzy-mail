"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.generateWelcomeMail = exports.generateResetPasswordMail = exports.generateVerificationMail = void 0;
var verifyMail_1 = require("./mails/verifyMail");
__createBinding(exports, verifyMail_1, "default", "generateVerificationMail");
var resetPasswordMail_1 = require("./mails/resetPasswordMail");
__createBinding(exports, resetPasswordMail_1, "default", "generateResetPasswordMail");
var welcomeMail_1 = require("./mails/welcomeMail");
__createBinding(exports, welcomeMail_1, "default", "generateWelcomeMail");
// import generateVerificationMail from "./mails/verifyMail";
// export default {generateVerificationMail}
// console.log(generateVerificationMail())
