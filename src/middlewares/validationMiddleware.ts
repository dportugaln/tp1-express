import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationError } from 'joi'

export function validateStarBody(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const starSchema = Joi.object({
        id: Joi.number().integer().min(1).required(),
        name: Joi.string().required(),
        type: Joi.string().required(),
        distancia: Joi.string().required(),
        mass: Joi.string().required(),
        radius: Joi.string().required(),
        temperature: Joi.string().required(),
        luminosity: Joi.string().required(),
        age: Joi.string().required(),
        composition: Joi.object({
            hydrogen: Joi.string().required(),
            helium: Joi.string().required(),
            otros_elementos: Joi.string().required(),
        }).required(),
        stellar_history: Joi.string().required(),
    });

    const { error, value } = starSchema.validate(body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }

    next()
}