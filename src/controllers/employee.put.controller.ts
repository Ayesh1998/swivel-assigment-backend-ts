import { NextFunction, Request, Response } from 'express';
import { updateEmployeeService } from '../services/employee.put.service';
import { putEmployeeSchema } from '../validation/schema.validation';

//logic of updating an already existing employee in the mongoDB
export const updateEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const {error, value} = putEmployeeSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            status:"error",
            error: error
        })
    }

    const {empId} = req.params;
    const filter = {_id: empId};
    const opts = {new: true};

    try {
        const updatedEmployee = await updateEmployeeService({filter, options:opts, data:req.body});
        res.status(201).send({updatedEmployee, message: "Employee updated successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
};