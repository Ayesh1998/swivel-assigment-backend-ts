import { NextFunction, Request, Response } from "express";
import {
  addEmployeeService,
  deleteEmployeeService,
  updateEmployeeService,
} from "../services/employee.service";
import {
  postEmployeeSchema,
  putEmployeeSchema,
} from "../validation/schema.validation";

import { EmployeeInterface } from "./employee.controller.interfaces";

//logic of adding employee to the mongoDB
export const addEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { error, value } = postEmployeeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      error: error,
    });
  }

  try {
    const { first_name, last_name, email, number, gender, photo, id } =
      req.body;
    const newEmployee: EmployeeInterface = {
      first_name,
      last_name,
      email,
      number,
      gender,
      photo,
      id,
    };

    const addedEmployee = await addEmployeeService(newEmployee);
    res
      .status(201)
      .send({
        result: addedEmployee,
        message: "New employee added successfully!",
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

//logic of updating an already existing employee in the mongoDB
export const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error, value } = putEmployeeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      error: error,
    });
  }

  const { empId } = req.params;
  const filter = { _id: empId };
  const opts = { new: true };

  try {
    const updatedEmployee = await updateEmployeeService({
      filter,
      options: opts,
      data: req.body,
    });
    res
      .status(201)
      .send({ updatedEmployee, message: "Employee updated successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

//logic of deleting an employee from the mongoDB
export const deleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { empId } = req.params;

  try {
    const deletedEmployee = await deleteEmployeeService(empId);
    res
      .status(201)
      .send({ deletedEmployee, message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
};

