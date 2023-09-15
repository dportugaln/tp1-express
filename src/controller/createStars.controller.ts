import { Request, Response, NextFunction } from "express";

export async function createStarController(req: Request, res: Response, next: NextFunction)  {
    //prueba de error en post    
    try {
            throw new Error('Unauthorized')

        } catch (error) {
            next(error)
        }
    }