import { EmployeeInterface } from "../controllers/employee.controller.interfaces";
import { IEmployeeModel } from "../models/employee.model.interfaces";
const EmployeeModel = require("../models/employee.model");

interface UpdateArgsInterface {
    filter: {_id: string},
    options: {new: boolean},
    data: EmployeeInterface,
}

//Save new employee service
export const SaveEmployeeService = async ({first_name, last_name, email, number, gender, photo, id}
     :EmployeeInterface): Promise<IEmployeeModel> => {
    const newEmployee = new EmployeeModel({first_name, last_name, email, number, gender, photo, id});
    try {
        const employee = await newEmployee.save();
        return employee;
    } catch (error) {
        throw new Error('New employee added unsuccessful!');
    }
};

//Get all employee service
export const GetEmployeesService = async (): Promise<IEmployeeModel> => {
    try {
        const employees = await EmployeeModel.find().select({"__v": 0,});
        return employees;
    } catch (error) {
        throw new Error('Fetching employees unsuccessful!');
    }
};

//Update employee service
export const UpdateEmployeeService = async ({filter,options,data}: UpdateArgsInterface )
            : Promise<IEmployeeModel> => {
    try {
        const updatedEmployee = await EmployeeModel.findOneAndUpdate(filter, data, options);
        return updatedEmployee;
    } catch (error) {
        throw new Error('Updating employee unsuccessful!');
    }
};

//Remove employee service
export const RemoveEmployeeService = async (id: string): Promise<IEmployeeModel> => {
    try {
        const deletedEmployee = await EmployeeModel.findByIdAndRemove(id);
        return deletedEmployee;
    } catch (error) {
        throw new Error('Removing employee unsuccessful!');
    }
};