"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = __importDefault(require("../controller/authController"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/', authController_1.default);
