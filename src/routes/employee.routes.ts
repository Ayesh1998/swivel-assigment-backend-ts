import express from "express";
const router = express.Router();
const EmployeeControllers = require("../controllers/index.controller");

//routes for employee data
router.post("/employee", EmployeeControllers.addEmployeeController);
router.delete("/employee/:empId", EmployeeControllers.deleteEmployeeController);
router.put("/employee/:empId", EmployeeControllers.updateEmployeeController);
router.get("/employee", EmployeeControllers.getEmployeesController);

export = router;
