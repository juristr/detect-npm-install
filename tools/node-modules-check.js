#!/usr/bin/env node
const shell = require('shelljs');
const colors = require('colors');
const [
  NODE_PATH,
  SCRIPT_PATH,
  PREVIOUS_HEAD,
  CURRENT_HEAD,
  ISBRANCH,
] = process.argv; // argv[node path, hook script path,  {what other args come from a merge action?}]

// Pulls file names for all changes from the original head to the current head.
let changedFiles = shell.exec(
  'git diff-tree -r --name-only --no-commit-id ' +
    PREVIOUS_HEAD +
    ' ' +
    CURRENT_HEAD
);

// Checks to see if package.json has changed. If so, alerts user to run npm install.
if (changedFiles.includes('package.json')) {
  let msg = 'package.json changed: Please run "npm install"';
  let width = 80;
  console.log(
    colors.bold.inverse.yellow(
      [
        '='.repeat(width),
        ' '.repeat(width),
        msg.padStart(msg.length + (width - msg.length) / 2).padEnd(width, ' '),
        ' '.repeat(width),
        '='.repeat(width),
      ].join('\n')
    )
  );
  //shell.exec('npm install');
}
