import express from "express";
import cors from "cors";
import Routes from "./routes/routes.js";
import { dbConnect } from "./config/dbConnection.js";
import authticationMiddleware from "./middleware/authentication.js";

const PORT = process.env.PORT || 3500;
const server = express();

dbConnect();

// Middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// server.use(authticationMiddleware);
server.use(Routes);

server.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

server.listen(PORT, () => {
  console.log("Server Running at PORT:", PORT);
});
