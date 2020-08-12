import { Response, Request, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const parse = () => {
  return [body("data").isString().isLength({ min: 1, max: 100 })];
};

export const validateFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validationResult(req).throw();
    next();
  } catch (err) {
    res.status(400).json({
      message: "Invalid Payload",
    });
  }
};
