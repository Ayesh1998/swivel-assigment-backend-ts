import { IEmployeeModel } from "../models/employee.model.interfaces";
import { ERRORS } from "../validation/errors";
const EmployeeModel = require("../models/employee.model");

//Get all employee service
export const getEmployeesService = async (): Promise<IEmployeeModel> => {
    try {
        const employees = await EmployeeModel.find().select({"__v": 0,});
        return employees;
    } catch (error) {
        throw new Error(ERRORS.GET_ERROR);
    }
};