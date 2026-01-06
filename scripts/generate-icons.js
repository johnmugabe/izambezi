#!/usr/bin/env node

/**
 * Script to generate icons metadata from the icons directory
 * Run with: node scripts/generate-icons.js
 */

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../icons');
const outputPath = path.join(__dirname, '../src/js/icons.json');

// Read all PNG files from icons directory
const files = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.png'))
  .map(file => file.replace('.png', ''));

// Generate icon metadata (you can enhance this with a labels map)
const icons = {};
files.forEach(name => {
  // Convert kebab-case to Title Case for label
  const label = name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  icons[name] = label;
});

// Write to JSON file
fs.writeFileSync(outputPath, JSON.stringify(icons, null, 2));

console.log(`Generated ${Object.keys(icons).length} icons to ${outputPath}`);
