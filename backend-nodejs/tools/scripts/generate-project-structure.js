import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getDirectoryStructure(dirPath, level = 0) {
  const files = fs.readdirSync(dirPath);
  let structure = '';

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();
    structure += `${'  '.repeat(level)}|-- ${file}\n`;
    if (isDirectory) {
      structure += getDirectoryStructure(fullPath, level + 1);
    }
  }

  return structure;
}

function generateStructureForFolders(folders) {
  let fullStructure = '';
  for (const folder of folders) {
    const folderPath = path.join(__dirname, '..', '..', folder);
    if (fs.existsSync(folderPath)) {
      fullStructure += `\nStructure of ${folder}:\n`;
      fullStructure += getDirectoryStructure(folderPath);
    } else {
      fullStructure += `\n${folder} directory does not exist.\n`;
    }
  }

  return fullStructure;
}

const foldersToInspect = ['src', '__tests__', 'tools'];
const projectStructure = generateStructureForFolders(foldersToInspect);

console.log(projectStructure);

export { getDirectoryStructure, generateStructureForFolders };
