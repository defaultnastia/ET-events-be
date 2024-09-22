import Event from "../models/Event.js";

export const getAllEvents = async ({ sortField, skip, limit }) => {
  const sort = {};
  sort[sortField] = "asc";

  const total = await Event.countDocuments();
  const results = await Event.find().sort(sort).skip(skip).limit(limit);

  return { total, results };
};
