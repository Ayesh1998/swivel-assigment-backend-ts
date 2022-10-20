import { IEmployeeModel } from "../models/employee.model.interfaces";
import { ERRORS } from "../validation/errors";
const EmployeeModel = require("../models/employee.model");

//Remove employee service
export const deleteEmployeeService = async (id: string): Promise<IEmployeeModel> => {
    try {
        const deletedEmployee = await EmployeeModel.findByIdAndRemove(id);
        return deletedEmployee;
    } catch (error) {
        throw new Error(ERRORS.DELETE_ERROR);
    }
};