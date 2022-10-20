"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const EmployeeControllers = require('../controllers/index.controller');
//routes for employee data
router.post('/employee', EmployeeControllers.addEmployeeController);
router.delete('/employee/:empId', EmployeeControllers.deleteEmployeeController);
router.put('/employee/:empId', EmployeeControllers.updateEmployeeController);
router.get('/employee', EmployeeControllers.getEmployeesController);
module.exports = router;
