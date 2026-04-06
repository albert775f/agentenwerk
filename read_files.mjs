import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'fs';
import { execSync } from 'child_process';

const repo = '/Users/albert/Documents/projects/agentenwerk';

// Checkout branch
try {
  execSync(`git -C ${repo} checkout redesign/spec-v2`, { stdio: 'pipe' });
  console.log('Checked out redesign/spec-v2');
} catch(e) {
  console.log('Branch checkout:', e.message);
}

// Copy photos
mkdirSync(`${repo}/public/team`, { recursive: true });
try {
  copyFileSync('/Users/albert/Downloads/Design ohne Titel.png', `${repo}/public/team/albert.png`);
  console.log('Copied albert.png');
} catch(e) { console.log('albert.png error:', e.message); }

try {
  copyFileSync('/Users/albert/Downloads/Design ohne Titel (1).png', `${repo}/public/team/david.png`);
  console.log('Copied david.png');
} catch(e) { console.log('david.png error:', e.message); }

// Read and export files
const pageTsx = readFileSync(`${repo}/app/page.tsx`, 'utf8');
const navbarTsx = readFileSync(`${repo}/components/navbar.tsx`, 'utf8');

writeFileSync('/tmp/page_tsx_export.txt', pageTsx);
writeFileSync('/tmp/navbar_tsx_export.txt', navbarTsx);

console.log('page.tsx length:', pageTsx.length);
console.log('navbar.tsx length:', navbarTsx.length);
console.log('Done! Files exported to /tmp/');
