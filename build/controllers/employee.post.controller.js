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
exports.addEmployee = void 0;
const employee_post_service_1 = require("../services/employee.post.service");
const schema_validation_1 = require("../validation/schema.validation");
//logic of adding employee to the mongoDB
const addEmployee = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = schema_validation_1.postEmployeeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: "error",
            error: error
        });
    }
    try {
        const { first_name, last_name, email, number, gender, photo, id } = req.body;
        const newEmployee = { first_name, last_name, email, number, gender, photo, id };
        const addedEmployee = yield (0, employee_post_service_1.addEmployeeService)(newEmployee);
        res.status(201).send({ result: addedEmployee, message: "New employee added successfully!" });
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.addEmployee = addEmployee;
