#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
const version = packageJson.version;
const timestamp = new Date().toISOString();

// Update index.html with version comment
const indexPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace or add version marker at end of file
const versionMarker = `<!-- v${version} | ${timestamp} -->`;
const versionRegex = /<!-- v[\d.]+ \| [\d\-T:.Z]+ -->/;

if (versionRegex.test(html)) {
  html = html.replace(versionRegex, versionMarker);
} else {
  // Add before closing </html> or at end
  if (html.includes('</html>')) {
    html = html.replace('</html>', `</html>\n${versionMarker}`);
  } else {
    html += `\n${versionMarker}`;
  }
}

fs.writeFileSync(indexPath, html);

// Update cache-bust.txt
fs.writeFileSync(path.join(__dirname, '..', 'cache-bust.txt'), Date.now().toString() + '\n');

console.log(`Version updated to ${version}`);
console.log(`Timestamp: ${timestamp}`);
