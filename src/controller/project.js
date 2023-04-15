import { Router } from "express";

import authticationMiddleware from "../middleware/authentication.js";
import { getProject, saveProject } from "./project.service.js";

const ProjectController = Router();

ProjectController.post("/", authticationMiddleware, async (req, res) => {
  try {
    const { title, description } = req.body;
    const { userId } = res.locals;
    if (!userId | !title | !description)
      throw { message: "Something went wrong" };
    const project = {
      title,
      description,
      userId,
    };
    const result = await saveProject(project);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

ProjectController.get("/", async (req, res) => {
  try {
    const result = await getProject();
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

export default ProjectController;
