import Event from "../models/Event.js";

export const getAllEvents = (skip, limit) => {
  return Event.find().skip(skip).limit(limit);
};
