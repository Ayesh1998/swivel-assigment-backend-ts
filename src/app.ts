import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import EmployeeRoutes from "./routes/employee.routes";
import { connectDb } from "./config/db.connection";
import server from "./server";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

//starting the express server
const app = server;
connectDb();

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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

export default app;
