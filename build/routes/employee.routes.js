"use strict";
const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employee.controller');
//routes for employee data
router.post('/employee', EmployeeController.addEmployee);
router.delete('/employee/:empId', EmployeeController.deleteEmployee);
router.put('/employee/:empId', EmployeeController.updateEmployee);
router.get('/employee', EmployeeController.getEmployees);
module.exports = router;
