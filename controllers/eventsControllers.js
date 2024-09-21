import * as guestsServices from "../services/guestsServices.js";
import * as eventsServices from "../services/eventsServices.js";
import controllerWrap from "../decorators/controllerWrap.js";
import requestError from "../helpers/requestError.js";

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const result = await eventsServices.getAllEvents(skip, limit);

  if (!result.length) throw requestError(404, "No events found");

  res.json({
    message: `${result.length} events were found`,
    result,
  });
};

const getEventGuests = async (req, res) => {
  const { id: eventId } = req.params;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const result = await guestsServices.getAllGuests(
    { eventId },
    { skip, limit }
  );

  if (!result) throw requestError(404, "No guests found");

  res.json({
    message: `${result.length} guests were found`,
    result,
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
