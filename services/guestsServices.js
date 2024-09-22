import Guest from "../models/Guest.js";

export const getAllGuests = async (filter, params) => {
  const { skip, limit } = params;

  const total = await Guest.countDocuments();
  const results = await Guest.find(filter).skip(skip).limit(limit);
  return { total, results };
};

export const createGuest = (data) => {
  return Guest.create(data);
};
