import { NextFunction, Request, Response } from 'express';
import { addEmployeeService } from '../services/employee.post.service';
import { postEmployeeSchema } from '../validation/schema.validation';
import { EmployeeInterface } from './employee.controller.interfaces';

//logic of adding employee to the mongoDB
export const addEmployee = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const {error, value} = postEmployeeSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            status:"error",
            error: error
        })
    }
    
    try {
        const {first_name, last_name, email, number, gender, photo, id} = req.body;
        const newEmployee: EmployeeInterface = {first_name, last_name, email, number, gender, photo, id}

        const addedEmployee = await addEmployeeService(newEmployee);
        res.status(201).send({ result:addedEmployee, message: "New employee added successfully!" });
    } catch (error) {
        res.status(500).send(error);
    }
};