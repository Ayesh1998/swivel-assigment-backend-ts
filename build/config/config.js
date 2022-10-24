"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//accessing data in the .env file
const ATLAS_URI = process.env.ATLAS_URI;
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
exports.config = {
    mongo: {
        url: ATLAS_URI,
    },
    server: {
        port: PORT,
    },
    baseUrl: BASE_URL,
};
