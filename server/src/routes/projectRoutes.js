import { Router } from 'express';
import { addProject, listProjects } from '../controllers/projectController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = Router();

router.get('/', listProjects);
router.post('/', adminAuth, addProject);

export default router;
