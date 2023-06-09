"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
}, { timestamps: true });
const users = mongoose_1.default.model('user', userSchema);
exports.default = users;
