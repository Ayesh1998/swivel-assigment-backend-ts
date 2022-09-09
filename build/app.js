"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
require("dotenv").config();
//starting the express server
const app = (0, express_1.default)();
//adding middleware
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/api", employee_routes_1.default);
//accessing data in the .env file
const uri = process.env.ATLAS_URI;
const port = process.env.PORT;
const dbName = process.env.DATABASE;
//creating the connection with mongoDB
mongoose_1.default
    .connect(uri, { retryWrites: true, w: 'majority' })
    .then(() => {
    app.listen(port);
    console.log(`Server is running on port: ${port}`);
})
    .catch((error) => {
    console.log(error);
});
