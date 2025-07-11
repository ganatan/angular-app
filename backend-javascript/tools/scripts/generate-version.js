import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const projectRoot = process.cwd();
const distDir = resolve(projectRoot, 'dist');
const distPath = resolve(distDir, 'version.json');

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const pkg = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf-8'));

const env = process.env.NODE_ENV || 'development';

const versionInfo = {
  version: pkg.version || '0.0.0',
  buildTime: new Date().toISOString(),
  env: env,
};

writeFileSync(distPath, JSON.stringify(versionInfo, null, 2), 'utf-8');
console.log('✅ version.json écrit dans dist/:', versionInfo);
