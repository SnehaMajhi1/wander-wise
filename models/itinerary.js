import { Schema, model } from "mongoose";

const itinerarySchema = new Schema(
  {
    trip: {
      type: Schema.Types.ObjectId,
      ref: "Trip",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },

    date: {
      type: Date,
      required: true,
    },

    activities: [
      {
        activityName: String,
        location: String,
        startTime: String,
        endTime: String,
        estimatedCost: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Itinerary = model("Itinerary", itinerarySchema);

export default Itinerary;