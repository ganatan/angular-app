import fs from 'fs';
import path from 'path';

const targetDirs = ['__tests__', 'src', 'tools'];

function generateStructure(dir: string, depth = 0): string {
  let structure = '';
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    structure += '  '.repeat(depth) + '|-- ' + item + '\n';

    if (isDirectory) {
      structure += generateStructure(fullPath, depth + 1);
    }
  });

  return structure;
}

targetDirs.forEach((dir) => {
  if (fs.existsSync(dir)) {
    console.log(`\nStructure of ${dir}:`);
    console.log(generateStructure(dir));
  } else {
    console.log(`\nDirectory ${dir} does not exist in the project.`);
  }
});
