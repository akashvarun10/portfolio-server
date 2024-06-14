const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://varun:varun123@portfolio.acdj1td.mongodb.net/?retryWrites=true&w=majority&appName=portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the project schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  github: String,
  demo: String,
  images: [String], // Array field to store image paths
});

// Create the Project model
const Project = mongoose.model('Project', projectSchema);

// Route for adding a new project
app.post('/projects', async (req, res) => {
  const { title, description, category, github, demo, images } = req.body;
  const newProject = new Project({ title, description, category, github, demo, images });

  try {
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route for getting all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

