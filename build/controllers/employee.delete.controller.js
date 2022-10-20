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
exports.deleteEmployee = void 0;
const employee_delete_service_1 = require("../services/employee.delete.service");
//logic of deleting an employee from the mongoDB
const deleteEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { empId } = req.params;
    try {
        const deletedEmployee = yield (0, employee_delete_service_1.deleteEmployeeService)(empId);
        res.status(201).send({ deletedEmployee, message: "Employee deleted successfully" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.deleteEmployee = deleteEmployee;
