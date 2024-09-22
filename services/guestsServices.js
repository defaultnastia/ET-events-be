import Guest from "../models/Guest.js";

export const getAllGuests = async (filter, params) => {
  const { skip, limit } = params;
  const { eventId, query } = filter;

  let key = "";
  if (query) key = query;

  const total = await Guest.countDocuments({
    $and: [
      { eventId },
      {
        $or: [
          { email: { $regex: key, $options: "i" } },
          { name: { $regex: key, $options: "i" } },
        ],
      },
    ],
  });

  const results = await Guest.find({
    $and: [
      { eventId },
      {
        $or: [
          { email: { $regex: key, $options: "i" } },
          { name: { $regex: key, $options: "i" } },
        ],
      },
    ],
  })
    .skip(skip)
    .limit(limit);
  return { total, results };
};

export const createGuest = (data) => {
  return Guest.create(data);
};
