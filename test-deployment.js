// Simple test script to verify deployment setup
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Testing SplitSmart deployment setup...\n');

// Check if required files exist
const requiredFiles = [
  'package.json',
  'vite.config.ts',
  'vercel.json',
  'api/proxy/[...path].js',
  'api/health/index.js'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✓ ${file} exists`);
  } else {
    console.log(`✗ ${file} is missing`);
    allFilesExist = false;
  }
});

console.log('\nChecking build directory...');
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('✓ Build directory exists');
  const distFiles = fs.readdirSync(distPath);
  if (distFiles.length > 0) {
    console.log('✓ Build files generated');
  } else {
    console.log('✗ Build directory is empty');
  }
} else {
  console.log('✗ Build directory missing');
}

console.log('\nDeployment readiness check:');
if (allFilesExist) {
  console.log('✓ All required files are present');
  console.log('✓ Application is ready for Vercel deployment');
  console.log('\nNext steps:');
  console.log('1. Commit your changes to a GitHub repository');
  console.log('2. Connect the repository to Vercel');
  console.log('3. Set the BACKEND_URL environment variable in Vercel dashboard');
  console.log('4. Deploy!');
} else {
  console.log('✗ Some required files are missing');
  console.log('Please check the missing files before deploying');
}