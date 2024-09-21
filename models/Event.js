import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set title of the event"],
    },
    description: {
      type: String,
      required: [true, "Set description of the event"],
    },
    eventDate: {
      type: Date,
      required: [true, "Set date of the event"],
    },
    organizer: {
      type: String,
      required: [true, "Set organizer of the event"],
    },
  },
  { versionKey: false }
);

const Event = model("event", eventSchema);

export default Event;
