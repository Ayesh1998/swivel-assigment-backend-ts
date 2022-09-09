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
exports.RemoveEmployeeService = exports.UpdateEmployeeService = exports.GetEmployeesService = exports.SaveEmployeeService = void 0;
const EmployeeModel = require("../models/employee.model");
//Save new employee service
const SaveEmployeeService = ({ first_name, last_name, email, number, gender, photo, id }) => __awaiter(void 0, void 0, void 0, function* () {
    const newEmployee = new EmployeeModel({ first_name, last_name, email, number, gender, photo, id });
    try {
        const employee = yield newEmployee.save();
        return employee;
    }
    catch (error) {
        throw new Error('New employee added unsuccessful!');
    }
});
exports.SaveEmployeeService = SaveEmployeeService;
//Get all employee service
const GetEmployeesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield EmployeeModel.find().select({ "__v": 0, });
        return employees;
    }
    catch (error) {
        throw new Error('Fetching employees unsuccessful!');
    }
});
exports.GetEmployeesService = GetEmployeesService;
//Update employee service
const UpdateEmployeeService = ({ filter, options, data }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedEmployee = yield EmployeeModel.findOneAndUpdate(filter, data, options);
        return updatedEmployee;
    }
    catch (error) {
        throw new Error('Updating employee unsuccessful!');
    }
});
exports.UpdateEmployeeService = UpdateEmployeeService;
//Remove employee service
const RemoveEmployeeService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEmployee = yield EmployeeModel.findByIdAndRemove(id);
        return deletedEmployee;
    }
    catch (error) {
        throw new Error('Removing employee unsuccessful!');
    }
});
exports.RemoveEmployeeService = RemoveEmployeeService;
