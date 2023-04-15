import { Router } from "express";
import { loginUser, registerUser } from "./auth.service.js";

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
    const result = await registerUser(username, email, password);
    res.send(result);
  } catch (e) {
    res.status(403).send(e);
  }
});

export default AuthController;
