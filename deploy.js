import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read .env file and extract GITHUB_TOKEN
const envFile = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
const githubToken = envFile.match(/GITHUB_TOKEN=([^\r\n]+)/)?.[1];

if (!githubToken) {
  console.error('Error: GITHUB_TOKEN not found in .env file');
  process.exit(1);
}

// Set environment variable for the deployment process
process.env.GITHUB_TOKEN = githubToken;

console.log('Starting deployment process...');
try {
  // Run build first
  execSync('npm run build', { stdio: 'inherit' });
  
  // Deploy using gh-pages with the GITHUB_TOKEN
  execSync('gh-pages -d dist --repo https://' + githubToken + '@github.com/Sricharan-09/sricharan.git', { stdio: 'inherit' });
  
  console.log('Deployment completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}