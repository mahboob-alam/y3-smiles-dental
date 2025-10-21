const fs = require('fs');
const path = require('path');
const glob = require('glob');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace react-router-dom imports with gatsby
  content = content.replace(
    /import\s*{.*?}\s*from\s*['"]react-router-dom['"]/g,
    `import { Link } from "gatsby"`
  );
  
  // Add SEO import if not present
  if (!content.includes('import SEO')) {
    content = content.replace(
      /(import.*?;\n)/,
      `$1import SEO from "@/components/SEO";\n`
    );
  }
  
  // Add Head export if not present
  if (!content.includes('export const Head')) {
    const pageName = path.basename(filePath, '.tsx');
    const title = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ');
    
    const headComponent = `
export const Head = () => (
  <SEO 
    title="${title} | Y3 Smiles Dental"
    description="Professional dental care services in Melbourne's northern suburbs. Visit Y3 Smiles Dental for comprehensive dental treatments."
  />
);
`;
    
    // Insert Head component before the main component
    const componentMatch = content.match(/const\s+\w+\s*=\s*\(\)/);
    if (componentMatch) {
      content = content.replace(
        componentMatch[0],
        `${headComponent}\n${componentMatch[0]}`
      );
    }
  }
  
  fs.writeFileSync(filePath, content);
}

// Get all TSX files in pages directory and its subdirectories
const files = glob.sync('src/pages/**/*.tsx');

files.forEach(file => {
  console.log(`Updating ${file}...`);
  updateFile(file);
});