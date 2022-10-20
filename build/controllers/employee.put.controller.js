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
exports.updateEmployee = void 0;
const employee_put_service_1 = require("../services/employee.put.service");
const schema_validation_1 = require("../validation/schema.validation");
//logic of updating an already existing employee in the mongoDB
const updateEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = schema_validation_1.putEmployeeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: "error",
            error: error
        });
    }
    const { empId } = req.params;
    const filter = { _id: empId };
    const opts = { new: true };
    try {
        const updatedEmployee = yield (0, employee_put_service_1.updateEmployeeService)({ filter, options: opts, data: req.body });
        res.status(201).send({ updatedEmployee, message: "Employee updated successfully" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.updateEmployee = updateEmployee;
