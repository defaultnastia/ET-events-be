import Event from "../models/Event.js";

export const getAllEvents = async (skip, limit) => {
  const total = await Event.countDocuments();
  const results = await Event.find().skip(skip).limit(limit);

  return { total, results };
};
