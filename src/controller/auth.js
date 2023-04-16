import { Router } from "express";
import { loginUser, registerUser, getUser } from "./auth.service.js";
import authticationMiddleware from "./../middleware/authentication.js";

const AuthController = Router();

AuthController.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw { message: "Something went wrong" };

    const result = await loginUser(email, password);
    res.send(result);
  } catch (e) {
    res.status(403).send(e);
  }
});

AuthController.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !password || !username)
      throw { message: "Something is missing." };
    const result = await registerUser(username, email, password);
    res.send(result);
  } catch (e) {
    res.status(403).send(e);
  }
});

AuthController.get("/me", authticationMiddleware, async (req, res) => {
  try {
    const userId = res.locals.userId;
    const result = await getUser(userId);
    res.send(result);
  } catch (e) {
    res.status(403).send(e);
  }
});

export default AuthController;
