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
  console.log('Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Preparing for deployment...');
  
  // Check if the node_modules/.cache/gh-pages directory exists and remove it
  const cacheDir = path.join(__dirname, 'node_modules', '.cache', 'gh-pages');
  if (fs.existsSync(cacheDir)) {
    console.log('Cleaning gh-pages cache directory...');
    // Use rimraf or fs to remove the directory
    try {
      fs.rmSync(cacheDir, { recursive: true, force: true });
      console.log('Removed gh-pages cache directory');
    } catch (e) {
      console.log('Failed to clean gh-pages cache:', e.message);
    }
  }
  
  // Check if local gh-pages branch exists and remove it if it does
  console.log('Checking for local gh-pages branch...');
  try {
    const branchesOutput = execSync('git branch', { encoding: 'utf8' });
    if (branchesOutput.includes('gh-pages')) {
      console.log('Local gh-pages branch found, removing it...');
      execSync('git branch -D gh-pages', { stdio: 'inherit' });
      console.log('Removed existing local gh-pages branch');
    } else {
      console.log('No local gh-pages branch found');
    }
  } catch (e) {
    console.log('Error checking or removing local branch:', e.message);
  }
  
  // Try to delete remote branch if it exists
  try {
    console.log('Checking for remote gh-pages branch...');
    const remoteBranchesOutput = execSync('git ls-remote --heads origin gh-pages', { encoding: 'utf8' });
    if (remoteBranchesOutput.trim()) {
      console.log('Remote gh-pages branch found, removing it...');
      execSync('git push origin --delete gh-pages', { stdio: 'inherit' });
      console.log('Removed existing remote gh-pages branch');
    } else {
      console.log('No remote gh-pages branch found');
    }
  } catch (e) {
    console.log('Error checking or removing remote branch:', e.message);
  }
  
  // Deploy using gh-pages with the GITHUB_TOKEN and force flag
  console.log('Deploying to GitHub Pages...');
  execSync(`gh-pages -d dist -f --repo https://${githubToken}@github.com/Sricharan-09/sricharan.git`, { stdio: 'inherit' });
  
  console.log('Deployment completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error);
  process.exit(1);
}