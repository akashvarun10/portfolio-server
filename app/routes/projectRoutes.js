import express from 'express';
import { addProject, getAllProjects } from '../controllers/projectController.js';

const router = express.Router();

router.post('/', addProject);
router.get('/', getAllProjects);

export default router;
