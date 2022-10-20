import Joi from 'joi';

export const postEmployeeSchema = Joi.object({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    gender: Joi.string(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    photo: Joi.string(),
    id: Joi.string()
})

export const putEmployeeSchema = Joi.object({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    gender: Joi.string(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    photo: Joi.string(),
    id: Joi.string(),
    _id: Joi.string().required()
})

export const getAllEmployeesSchema = Joi.array().items(Joi.object({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    gender: Joi.string(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    photo: Joi.string(),
    id: Joi.string(),
    _id: Joi.string().required()
}))



