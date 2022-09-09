import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import EmployeeRoutes from "./routes/employee.routes";
require("dotenv").config();

//starting the express server
const app = express();

//adding middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api", EmployeeRoutes);

//accessing data in the .env file
const uri = process.env.ATLAS_URI!;
const port = process.env.PORT;
const dbName = process.env.DATABASE;

//creating the connection with mongoDB
mongoose
  .connect(uri,  { retryWrites: true, w: 'majority' })
  .then(() => {
    app.listen(port);
    console.log(`Server is running on port: ${port}`);
  })
  .catch((error) => {
    console.log(error);
  });
