import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.js";

const KEY = "JHON_CENA";

export const registerUser = async (username, email, password) => {
  try {
    const newUser = UserModel({ username, email, password });
    return await newUser.save();
  } catch (e) {
    throw e;
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await UserModel.findOne({ email });
    if (user.password === password) return createToken({ id: user.id });
    return "unauthorized";
  } catch (e) {
    throw { message: "email or password is wrong, or not registerd" };
  }
};

const createToken = (value) => {
  return { token: jwt.sign(value, KEY, { expiresIn: "3d" }) };
};

export const verifyToken = (token) => {
  return jwt.verify(token, KEY);
};
