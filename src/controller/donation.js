import { Router } from "express";
import { getDonations, saveDonations } from "./donation.service.js";
import authticationMiddleware from "../middleware/authentication.js";

const DonationController = Router();

DonationController.post("/:id", authticationMiddleware, async (req, res) => {
  try {
    const projectId = req.params.id;
    const { price } = req.body;
    const { userId } = res.locals;
    if (!projectId | !price | !userId)
      throw { message: "Something went wrong" };
    const donation = {
      projectId,
      price,
      userId,
    };
    const result = await saveDonations(donation);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

DonationController.get("/", async (req, res) => {
  try {
    const result = await getDonations();
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default DonationController;
