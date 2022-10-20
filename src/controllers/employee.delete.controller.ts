import { NextFunction, Request, Response } from 'express';
import {deleteEmployeeService}  from '../services/employee.delete.service';

//logic of deleting an employee from the mongoDB
export const deleteEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const {empId} = req.params;
    
    try {
        const deletedEmployee = await deleteEmployeeService(empId);
        res.status(201).send({deletedEmployee, message: "Employee deleted successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
};