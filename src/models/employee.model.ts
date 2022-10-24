import mongoose, { Schema } from "mongoose";
import { IEmployeeModel } from "./employee.model.interfaces";

//Employee schema
const EmployeeSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    number: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    photo: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    id: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
  },
  {
    timestamps: false,
  }
);

//exporting Employee model
module.exports = mongoose.model<IEmployeeModel>("Employee", EmployeeSchema);
