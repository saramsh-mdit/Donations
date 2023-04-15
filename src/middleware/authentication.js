import { verifyToken } from "../controller/auth.services.js";
import { UserModel } from "../models/user.js";

const authticationMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authentication;
    const verification = await verifyToken(token);
    if (!verification) throw { message: "Unauthorized" };

    res.locals.userId = verification.id;
    const user = await UserModel.findOne({ id: verification.id });

    next();
  } catch (e) {
    res.status(401).send(e);
  }
};
export default authticationMiddleware;
