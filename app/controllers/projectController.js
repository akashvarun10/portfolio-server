import Project from '../models/projectModel.js';
import projectService from '../services/projectService.js';

// Handle adding a new project
export const addProject = async (req, res) => {
  const { title, description, category, github, demo, images } = req.body;
  try {
    const newProject = await projectService.createProject({ title, description, category, github, demo, images });
    res.status(201).json(newProject); // Respond with the created project
  } catch (err) {
    res.status(400).json({ message: err.message }); // Respond with error message
  }
};

// Handle getting all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectService.getProjects();
    res.json(projects); // Respond with all projects
  } catch (err) {
    res.status(500).json({ message: err.message }); // Respond with error message
  }
};