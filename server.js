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

// const PORT = process.env.PORT

// // Start the server
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Server started on port ${PORT}`);
// });

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(err => {
  console.error("Error connecting to MongoDB", err);
});

// Define the project schema
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  github: String,
  demo: String,
  images: [String],
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

const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
