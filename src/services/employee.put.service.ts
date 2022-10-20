import { EmployeeInterface } from "../controllers/employee.controller.interfaces";
import { IEmployeeModel } from "../models/employee.model.interfaces";
import { ERRORS } from "../validation/errors";
const EmployeeModel = require("../models/employee.model");

interface UpdateArgsInterface {
    filter: {_id: string},
    options: {new: boolean},
    data: EmployeeInterface,
}

//Update employee service
export const updateEmployeeService = async ({filter,options,data}: UpdateArgsInterface )
            : Promise<IEmployeeModel> => {
    try {
        const updatedEmployee = await EmployeeModel.findOneAndUpdate(filter, data, options);
        return updatedEmployee;
    } catch (error) {
        throw new Error(ERRORS.UPDATE_ERROR);
    }
};