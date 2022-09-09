import { NextFunction, Request, Response } from 'express';
import { GetEmployeesService, RemoveEmployeeService, SaveEmployeeService, UpdateEmployeeService } from '../services/employee.service';
import { EmployeeInterface } from './employee.controller.interfaces';

//logic of adding employee to the mongoDB
const addEmployee = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const {first_name, last_name, email, number, gender, photo, id} = req.body;
        const newEmployee: EmployeeInterface = {first_name, last_name, email, number, gender, photo, id}

        const addedEmployee = await SaveEmployeeService(newEmployee);
        res.status(201).send({ result:addedEmployee, message: "New employee added successfully!" });
    } catch (error) {
        res.status(500).send(error);
    }
};

//logic of getting all employees from the mongoDB
const getEmployees = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
        const employees = await GetEmployeesService();
        res.status(201).send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};

//logic of updating an already existing employee in the mongoDB
const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const {empId} = req.params;
    const filter = {_id: empId};
    const opts = {new: true};

    try {
        const updatedEmployee = await UpdateEmployeeService({filter, options:opts, data:req.body});
        res.status(201).send({updatedEmployee, message: "Employee updated successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
};

//logic of deleting an employee from the mongoDB
const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const {empId} = req.params;
    
    try {
        const deletedEmployee = await RemoveEmployeeService(empId);
        res.status(201).send({deletedEmployee, message: "Employee deleted successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {addEmployee, deleteEmployee, updateEmployee, getEmployees};
