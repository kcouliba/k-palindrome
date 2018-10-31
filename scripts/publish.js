#!/usr/bin/nscript
/* To run this script, nscript is needed: [sudo] npm install -g nscript
/* Publish.js, publish a new version of the npm package as found in the current directory */
module.exports = function (shell, git) {
  const pkg = JSON.parse(shell.read('package.json'))

  git('commit', '-am', 'Published version ' + pkg.version)
  git('tag', pkg.version)
  git('push')
  git('push', '--tags')
}
