import mongoose from "mongoose";
import crypto from "crypto";

const projectSchema = new mongoose.Schema({
  id: { type: String, default: crypto.randomUUID() },
  title: String,
  description: String,
  userId: String,
});

export const ProjectModel = new mongoose.model("projects", projectSchema);
