import { DonationModel } from "../models/donation.js";

export const saveDonations = async (donation) => {
  try {
    const newDonation = DonationModel(donation);
    return await newDonation.save();
  } catch (e) {
    throw e;
  }
};

export const getDonations = async () => {
  try {
    return await DonationModel.find();
  } catch (e) {
    throw e;
  }
};
