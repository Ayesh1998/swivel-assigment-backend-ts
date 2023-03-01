import { ERRORS } from "../validation/errors";
import { EmployeeInterface } from "../controllers/employee.controller.interfaces";
import { IEmployeeModel } from "../models/employee.model.interfaces";

const EmployeeModel = require("../models/employee.model");

interface UpdateArgsInterface {
  filter: { _id: string };
  options: { new: boolean };
  data: EmployeeInterface;
}

//Save new employee service
export const addEmployeeService = async ({
  first_name,
  last_name,
  email,
  number,
  gender,
  photo,
  id,
}: EmployeeInterface): Promise<IEmployeeModel> => {
  const newEmployee = new EmployeeModel({
    first_name,
    last_name,
    email,
    number,
    gender,
    photo,
    id,
  });
  try {
    return await newEmployee.save();
  } catch (error) {
    throw new Error(ERRORS.POST_ERROR);
  }
};

//Update employee service
export const updateEmployeeService = async ({
  filter,
  options,
  data,
}: UpdateArgsInterface): Promise<IEmployeeModel> => {
  try {
    return await EmployeeModel.findOneAndUpdate(filter, data, options);
  } catch (error) {
    throw new Error(ERRORS.UPDATE_ERROR);
  }
};

//Remove employee service
export const deleteEmployeeService = async (
  id: string
): Promise<IEmployeeModel> => {
  try {
    return await EmployeeModel.findByIdAndRemove(id);
  } catch (error) {
    throw new Error(ERRORS.DELETE_ERROR);
  }
};
