import express from "express";
import validateBody from "../decorators/validateBody.js";
import { addGuestSchema } from "../schemas/guestsSchemas.js";
import eventsControllers from "../controllers/eventsControllers.js";

const addEventGuestsValidation = validateBody(addGuestSchema);

const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);

eventsRouter.get("/:id/guests", eventsControllers.getEventGuests);

eventsRouter.post(
  "/:id/guests",
  addEventGuestsValidation,
  eventsControllers.addEventGuest
);

export default eventsRouter;
