import { z } from 'zod';
import { readProjects, writeProjects } from '../utils/projectStore.js';

const projectSchema = z.object({
  title: z.string().min(3),
  image: z.string().url().or(z.string().startsWith('/')),
  techStack: z.array(z.string().min(1)).min(1),
  problem: z.string().min(8),
  solution: z.string().min(8),
  impact: z.string().min(8),
  github: z.string().url(),
  demo: z.string().url(),
});

export async function listProjects(_req, res) {
  const projects = await readProjects();
  return res.json({ projects });
}

export async function addProject(req, res) {
  const parseResult = projectSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ message: 'Invalid project payload', errors: parseResult.error.flatten() });
  }

  const projects = await readProjects();
  const newProject = {
    id: `p${Date.now()}`,
    ...parseResult.data,
  };

  projects.unshift(newProject);
  await writeProjects(projects);

  return res.status(201).json({ message: 'Project created', project: newProject });
}
