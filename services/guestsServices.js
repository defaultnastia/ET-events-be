import Guest from "../models/Guest.js";

export const getAllGuests = (filter, params) => {
  const { skip, limit } = params;

  return Guest.find(filter).skip(skip).limit(limit);
};

export const createGuest = (data) => {
  return Guest.create(data);
};
