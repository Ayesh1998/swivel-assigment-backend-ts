import request from "supertest";
import app from ".././app";
import { EmployeeInterface } from "../controllers/employee.controller.interfaces";

let newEmployee: EmployeeInterface;

describe(`Employees Tests Suites`, () => {
  test(`Get Employees`, async () => {
    const res = await request(app).get("/api/employee").send();
    expect(res.status).toBe(201);
  });

  test(`Add Employee - All fields have value.`, async () => {
    const employeeData = {
      first_name: "Kelton",
      last_name: "Rau",
      email: "Patrick_Ratke@gmail.com",
      number: "+94771277688",
      gender: "F",
      id: "11",
    };
    const res = await request(app).post("/api/employee").send(employeeData);
    expect(res.status).toBe(201);
    expect(res.body.result).toHaveProperty("_id");
    let tempNewEmployee = res.body.result;
    delete tempNewEmployee.__v;
    newEmployee = tempNewEmployee;
  });

  test(`Add Employee - Required fields missing.`, async () => {
    const employeeData = {
      first_name: "Kelton",
      last_name: "Rau",
      number: "+94771277688",
      gender: "F",
      id: "11",
    };
    const res = await request(app).post("/api/employee").send(employeeData);
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test(`Update Employee - All fields have value.`, async () => {
    const employeeData = {
      ...newEmployee,
      first_name: "Ayesh",
    };
    const res = await request(app)
      .put(`/api/employee/${newEmployee._id}`)
      .send(employeeData);
    expect(res.status).toBe(201);
    expect(res.body.updatedEmployee).toHaveProperty("_id");
  });

  test(`Delete Employee`, async () => {
    const res = await request(app).delete(`/api/employee/${newEmployee._id}`);
    expect(res.status).toBe(201);
    expect(res.body.deletedEmployee).toHaveProperty("_id");
  });
});
