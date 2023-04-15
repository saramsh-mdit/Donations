import { Router } from "express";

import AuthController from "../controller/auth.js";
import DonationController from "../controller/donation.js";
import ProjectController from "../controller/project.js";

const Routes = Router();

Routes.use("/auth", AuthController);
Routes.use("/donation", DonationController);
Routes.use("/project", ProjectController);

export default Routes;
