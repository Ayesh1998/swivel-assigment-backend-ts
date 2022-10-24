import {EmployeeInterface} from "../controllers/employee.controller.interfaces";
import {IEmployeeModel} from "../models/employee.model.interfaces";
import {ERRORS} from "../validation/errors";

const EmployeeModel = require("../models/employee.model");

//Save new employee service
export const addEmployeeService = async ({first_name, last_name, email, number, gender, photo, id}
    :EmployeeInterface): Promise<IEmployeeModel> => {
   const newEmployee = new EmployeeModel({first_name, last_name, email, number, gender, photo, id});
   try {
       return await newEmployee.save();
   } catch (error) {
       throw new Error(ERRORS.POST_ERROR);
   }
};