"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRouter = void 0;
const express_1 = require("express");
const signUpController_1 = __importDefault(require("../controller/signUpController"));
exports.signUpRouter = (0, express_1.Router)();
exports.signUpRouter.post('/', signUpController_1.default);
