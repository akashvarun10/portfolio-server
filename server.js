
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';

// const app = express();
// app.use(cors());
// app.use(express.json());
// dotenv.config();

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define the project schema
// const projectSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   category: String,
//   github: String,
//   demo: String,
//   images: [String], // Array field to store image paths
// });

// // Create the Project model
// const Project = mongoose.model('Project', projectSchema);

// // Route for adding a new project
// app.post('/projects', async (req, res) => {
//   const { title, description, category, github, demo, images } = req.body;
//   const newProject = new Project({ title, description, category, github, demo, images });
//   try {
//     await newProject.save();
//     res.status(201).json(newProject);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Route for getting all projects
// app.get('/projects', async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log('Server started on port 3000');
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
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
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log('Server started on port 3000');
});