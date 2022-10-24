"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmployeesSchema = exports.putEmployeeSchema = exports.postEmployeeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.postEmployeeSchema = joi_1.default.object({
    first_name: joi_1.default.string().max(30).required(),
    last_name: joi_1.default.string().max(30).required(),
    gender: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    number: joi_1.default.string(),
    photo: joi_1.default.string(),
    id: joi_1.default.string(),
});
exports.putEmployeeSchema = joi_1.default.object({
    first_name: joi_1.default.string().max(30).required(),
    last_name: joi_1.default.string().max(30).required(),
    gender: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    number: joi_1.default.string(),
    photo: joi_1.default.string(),
    id: joi_1.default.string(),
    _id: joi_1.default.string().required(),
});
exports.getAllEmployeesSchema = joi_1.default.array().items(joi_1.default.object({
    first_name: joi_1.default.string().max(30).required(),
    last_name: joi_1.default.string().max(30).required(),
    gender: joi_1.default.string(),
    email: joi_1.default.string().email().required(),
    number: joi_1.default.string(),
    photo: joi_1.default.string(),
    id: joi_1.default.string(),
    _id: joi_1.default.string().required(),
}));
