import { execSync } from 'node:child_process';

function run(command) {
  return execSync(command, { encoding: 'utf8' }).trim();
}

const status = run('git status --porcelain');

if (status.length > 0) {
  console.error('Working tree has changes after generating docs.');
  console.error('Commit changes and rerun publish.');
  console.error('\nChanged files:\n');
  console.error(status);
  process.exit(1);
}
