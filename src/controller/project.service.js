import { ProjectModel } from "../models/project.js";

export const saveProject = async (project) => {
  try {
    const newProject = ProjectModel(project);
    return await newProject.save();
  } catch (e) {
    throw e;
  }
};

export const getProject = async () => {
  try {
    return await ProjectModel.find();
  } catch (e) {
    throw e;
  }
};
