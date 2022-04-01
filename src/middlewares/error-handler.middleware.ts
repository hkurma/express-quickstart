import { NextFunction, Request, Response } from "express";
import { HttpError } from "../errors/http.error";

export const errorHandler = (err: Error, _: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    if (err instanceof HttpError) statusCode = err.statusCode;
    res.status(statusCode).json({
        message: err.message
    });
}