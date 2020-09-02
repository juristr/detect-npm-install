# Detecting an npm install

Ever run into the issue where you switched branch, or pulled a new version from the remote and it just doesn't work? You run into strange errors, only to realize a couple minutes later that someone added new npm packages and you need to run an `npm install`.

This repo demos how you can

- create a script that automatically detects when you need to run an npm install
- use [Husky](https://www.npmjs.com/package/husky) to setup a Git hook that triggers that script

To see the script in action, clone the repo and switch between it's `master` and `feature/cowsay` branch.

Check out the full blog post on [juristr.com](https://juristr.com/blog/2020/09/detect-node_modules-out-of-sync/) or [ping me on Twitter](https://twitter.com/juristr).
