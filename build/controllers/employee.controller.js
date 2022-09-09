"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_service_1 = require("../services/employee.service");
//logic of adding employee to the mongoDB
const addEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { first_name, last_name, email, number, gender, photo, id } = req.body;
        const newEmployee = { first_name, last_name, email, number, gender, photo, id };
        const addedEmployee = yield (0, employee_service_1.SaveEmployeeService)(newEmployee);
        res.status(201).send({ result: addedEmployee, message: "New employee added successfully!" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
//logic of getting all employees from the mongoDB
const getEmployees = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield (0, employee_service_1.GetEmployeesService)();
        res.status(201).send(employees);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
//logic of updating an already existing employee in the mongoDB
const updateEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId } = req.params;
    const filter = { _id: empId };
    const opts = { new: true };
    try {
        const updatedEmployee = yield (0, employee_service_1.UpdateEmployeeService)({ filter, options: opts, data: req.body });
        res.status(201).send({ updatedEmployee, message: "Employee updated successfully" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
//logic of deleting an employee from the mongoDB
const deleteEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId } = req.params;
    try {
        const deletedEmployee = yield (0, employee_service_1.RemoveEmployeeService)(empId);
        res.status(201).send({ deletedEmployee, message: "Employee deleted successfully" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
module.exports = { addEmployee, deleteEmployee, updateEmployee, getEmployees };
