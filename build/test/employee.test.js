"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require(".././app"));
let newEmployee;
describe(`Employees Tests Suites`, () => {
    test(`Get Employees`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).get("/api/employee").send();
        expect(res.status).toBe(201);
    }));
    test(`Add Employee - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeData = {
            first_name: "Kelton",
            last_name: "Rau",
            email: "Patrick_Ratke@gmail.com",
            number: "+94771277688",
            gender: "F",
            id: "11",
        };
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/employee").send(employeeData);
        expect(res.status).toBe(201);
        expect(res.body.result).toHaveProperty("_id");
        let tempNewEmployee = res.body.result;
        delete tempNewEmployee.__v;
        newEmployee = tempNewEmployee;
    }));
    test(`Add Employee - Required fields missing.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeData = {
            first_name: "Kelton",
            last_name: "Rau",
            number: "+94771277688",
            gender: "F",
            id: "11",
        };
        const res = yield (0, supertest_1.default)(app_1.default).post("/api/employee").send(employeeData);
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("error");
    }));
    test(`Update Employee - All fields have value.`, () => __awaiter(void 0, void 0, void 0, function* () {
        const employeeData = Object.assign(Object.assign({}, newEmployee), { first_name: "Ayesh" });
        const res = yield (0, supertest_1.default)(app_1.default)
            .put(`/api/employee/${newEmployee._id}`)
            .send(employeeData);
        expect(res.status).toBe(201);
        expect(res.body.updatedEmployee).toHaveProperty("_id");
    }));
    test(`Delete Employee`, () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.default).delete(`/api/employee/${newEmployee._id}`);
        expect(res.status).toBe(201);
        expect(res.body.deletedEmployee).toHaveProperty("_id");
    }));
});
