import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../../src');
const OUT_DIR = path.join(__dirname, '../../ai-docs/source');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, filelist);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
      filelist.push(fullPath);
    }
  }

  return filelist;
}

function generateMarkdownFiles() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const files = walk(SRC_DIR);
  files.forEach((file, index) => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(SRC_DIR, file);
    const mdFileName = `${String(index + 1).padStart(2, '0')} - ${relativePath.replace(/[\\/]/g, '_')}.md`;
    const mdFilePath = path.join(OUT_DIR, mdFileName);

    const mdContent = `# ${relativePath}\n\n\`\`\`js\n${content}\n\`\`\`\n`;
    fs.writeFileSync(mdFilePath, mdContent);
  });

  console.log('✅ Markdown files generated in:', OUT_DIR);
}

generateMarkdownFiles();
