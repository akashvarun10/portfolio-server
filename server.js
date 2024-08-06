import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './app/config/db.js';
import projectRoutes from './app/routes/projectRoutes.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies

connectDB(); // Connect to MongoDB

// Use project routes for handling '/projects' endpoint
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on port ${PORT}`);
});
