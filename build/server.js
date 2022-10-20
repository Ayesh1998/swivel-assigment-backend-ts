"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const server = (0, express_1.default)();
server.listen(config_1.config.server.port);
console.log(`Server started in port ${config_1.config.server.port}`);
exports.default = server;
