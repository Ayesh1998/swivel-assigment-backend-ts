import { deleteEmployee } from './employee.delete.controller';
import { getEmployees } from './employee.getAll.controller';
import { addEmployee } from './employee.post.controller';
import { updateEmployee } from './employee.put.controller';

const addEmployeeController = addEmployee;
const getEmployeesController = getEmployees;
const updateEmployeeController = updateEmployee;
const deleteEmployeeController = deleteEmployee;

module.exports = {addEmployeeController, deleteEmployeeController, updateEmployeeController,
     getEmployeesController};
