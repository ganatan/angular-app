import fs from 'fs';
import path from 'path';

function getDirectoryStructure(dirPath, level = 0) {
  const files = fs.readdirSync(dirPath);

  let structure = '';

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const isDirectory = fs.lstatSync(fullPath).isDirectory();

    structure += `${'  '.repeat(level)}|-- ${file}\n`;

    if (isDirectory) {
      structure += getDirectoryStructure(fullPath, level + 1);
    }
  });

  return structure;
}

function generateStructureForFolders(folders) {
  let fullStructure = '';

  folders.forEach(folder => {
    const folderPath = path.join(path.resolve(), folder);
    if (fs.existsSync(folderPath)) {
      fullStructure += `\nStructure of ${folder}:\n`;
      fullStructure += getDirectoryStructure(folderPath);
    } else {
      fullStructure += `\n${folder} directory does not exist.\n`;
    }
  });

  return fullStructure;
}

const foldersToInspect = ['src', '__tests__', 'tools', 'tutorials'];
const projectStructure = generateStructureForFolders(foldersToInspect);

console.log(projectStructure);

export {
  getDirectoryStructure,
  generateStructureForFolders,
};

