import { NextFunction, Request, Response } from 'express';
import { getEmployeesService } from '../services/employee.getAll.service';
import { getAllEmployeesSchema } from '../validation/schema.validation';

//logic of getting all employees from the mongoDB
export const getEmployees = async (req: Request, res: any, next: NextFunction): Promise<Response | void> => {
    
    const {error, value} = getAllEmployeesSchema.validate(res.body);
    if(error){
        return res.status(400).json({
            status:"error",
            error: error
        })
    }

    try {
        const employees = await getEmployeesService();
        res.status(201).send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
};