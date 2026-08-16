import { body } from 'express-validator';
import { validate } from './validate.js';

export const createBaggageValidator = [
  body("name")
    .notEmpty()
    .withMessage("Name should not be empty.")
    .trim()
    .escape(),
  validate,
];


export const updateBaggageValidator=[
  body("name")
.optional()
.trim()
    .escape()
    .notEmpty()
    .withMessage("Name should not be empty."),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed status must be a true or false boolean value"),
  validate,
];