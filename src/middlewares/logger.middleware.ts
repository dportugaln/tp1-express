import { NextFunction, Request, Response } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request from IP: ${req.ip}\nHost: ${req.hostname}`)
    next()
}