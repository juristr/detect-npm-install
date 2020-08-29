#!/usr/bin/env node
const shell = require('shelljs');
const colors = require('colors');
const fs = require('fs');

const [
  NODE_PATH,
  SCRIPT_PATH,
  PREVIOUS_HEAD,
  CURRENT_HEAD,
  ISBRANCH,
] = process.argv;

let changedFiles = shell.exec(
  'git diff-tree -r --name-only --no-commit-id ' +
    PREVIOUS_HEAD +
    ' ' +
    CURRENT_HEAD
);

// Checks to see if package.json has changed. If so, alerts user to run npm install.
if (changedFiles.includes('package.json')) {
  let msg = 'package.json changed: ';
  if (fs.existsSync('yarn.lock')) {
    msg += 'Please run "yarn install"';
  } else {
    msg += 'Please run "npm install"';
  }

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
