import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_FILE = path.join(__dirname, '..', 'data', 'projects.json');

export async function readProjects() {
  const content = await fs.readFile(PROJECT_FILE, 'utf-8');
  return JSON.parse(content);
}

export async function writeProjects(projects) {
  await fs.writeFile(PROJECT_FILE, JSON.stringify(projects, null, 2));
}
