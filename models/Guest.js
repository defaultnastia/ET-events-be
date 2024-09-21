import { Schema, model } from "mongoose";
import { emailRegExp } from "../constants/guestConstants.js";

const guestSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name of the guest"],
    },
    email: {
      type: String,
      match: emailRegExp,
      required: [true, "Set email of the guest"],
    },
    birthDate: {
      type: Date,
      required: [true, "Set birth date of the guest"],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "event",
    },
  },
  { versionKey: false }
);

const Guest = model("guest", guestSchema);

export default Guest;
