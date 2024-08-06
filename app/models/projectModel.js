import mongoose from 'mongoose';

// Define the schema for the Project model
const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  github: String,
  demo: String,
  images: [String],
});

// Create and export the Project model
const Project = mongoose.model('Project', projectSchema);

export default Project;
