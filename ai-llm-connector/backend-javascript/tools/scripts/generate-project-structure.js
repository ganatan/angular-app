import fs from 'fs';
import path from 'path';

const excludedDirs = ['coverage', 'dist', 'logs', 'node_modules'];

function getDirectoryStructure(dirPath, level = 0) {
  let structure = '';
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    if (excludedDirs.includes(file)) {
      continue;
    }

    const fullPath = path.join(dirPath, file);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();

    structure += `${'  '.repeat(level)}|-- ${file}\n`;
    if (isDirectory) {
      structure += getDirectoryStructure(fullPath, level + 1);
    }
  }

  return structure;
}

const rootPath = process.cwd();
const projectStructure = `Structure of project root:\n${getDirectoryStructure(rootPath)}`;

console.log(projectStructure);
