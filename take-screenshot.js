#!/usr/bin/env node

// Simple script to take a screenshot using a public API
// Run: node take-screenshot.js

const fs = require('fs');
const https = require('https');

const url = 'https://calm-creponne-26b379.netlify.app/';
const outputPath = './public/password-generator-screenshot.png';

console.log('Taking screenshot of:', url);
console.log('Please visit the URL manually and take a screenshot, then save it to:', outputPath);
console.log('\nAlternative: Use browser DevTools:');
console.log('1. Open Chrome DevTools (F12)');
console.log('2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)');
console.log('3. Type "screenshot" and select "Capture full size screenshot"');
console.log('4. Save as password-generator-screenshot.png in the public folder');
