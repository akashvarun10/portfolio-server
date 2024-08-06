import Project from '../models/projectModel.js';

const createProject = async (projectData) => {
  const project = new Project(projectData);
  return await project.save();
};

const getProjects = async () => {
  return await Project.find();
};


export default {
  createProject,
  getProjects,
};

