import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  id: { type: String, default: crypto.randomUUID() },
  username: String,
  email: String,
  password: String,
});

export const UserModel = new mongoose.model("users", userSchema);
