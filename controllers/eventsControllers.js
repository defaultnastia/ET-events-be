import * as guestsServices from "../services/guestsServices.js";
import * as eventsServices from "../services/eventsServices.js";
import controllerWrap from "../decorators/controllerWrap.js";
import requestError from "../helpers/requestError.js";

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 20, sort } = req.query;
  const skip = (page - 1) * limit;

  const { total, results } = await eventsServices.getAllEvents({
    sortField: sort,
    skip,
    limit,
  });

  if (!results.length) throw requestError(404, "No events found");

  res.json({
    total,
    results,
  });
};

const getEventGuests = async (req, res) => {
  const { id: eventId } = req.params;
  const { page = 1, limit = 20, query } = req.query;
  const skip = (page - 1) * limit;

  const { total, results } = await guestsServices.getAllGuests(
    { eventId, query },
    { skip, limit, query }
  );

  if (!results.length) throw requestError(404, "No guests found");

  res.json({
    total,
    results,
  });
};

const addEventGuest = async (req, res) => {
  const { id: eventId } = req.params;
  const data = req.body;

  const result = await guestsServices.createGuest({ ...data, eventId });

  res.status(201).json({
    message: "Guest was added",
    result,
  });
};

export default {
  getAllEvents: controllerWrap(getAllEvents),
  getEventGuests: controllerWrap(getEventGuests),
  addEventGuest: controllerWrap(addEventGuest),
};
