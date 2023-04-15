import mongoose from "mongoose";
import crypto from "crypto";

const donationSchema = new mongoose.Schema({
  id: { type: String, default: crypto.randomUUID() },
  userId: String,
  price: Number,
  projectId: String,
});

export const DonationModel = new mongoose.model("donations", donationSchema);
