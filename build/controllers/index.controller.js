"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_delete_controller_1 = require("./employee.delete.controller");
const employee_getAll_controller_1 = require("./employee.getAll.controller");
const employee_post_controller_1 = require("./employee.post.controller");
const employee_put_controller_1 = require("./employee.put.controller");
const addEmployeeController = employee_post_controller_1.addEmployee;
const getEmployeesController = employee_getAll_controller_1.getEmployees;
const updateEmployeeController = employee_put_controller_1.updateEmployee;
const deleteEmployeeController = employee_delete_controller_1.deleteEmployee;
module.exports = {
    addEmployeeController,
    deleteEmployeeController,
    updateEmployeeController,
    getEmployeesController,
};
