import Joi from "joi";
import { emailRegExp } from "../constants/guestConstants.js";

export const addGuestSchema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().pattern(emailRegExp).required(),
  birthDate: Joi.date().less(Date.now()).required(),
});
