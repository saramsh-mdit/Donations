import mongoose from "mongoose";

export const dbConnect = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/donation")
    .then(() => console.log("Db connected Sucessfully"))
    .catch(() => console.log("Db connected Error"));
