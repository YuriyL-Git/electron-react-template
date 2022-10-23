const exec = require('child_process').execFile;

const fs = require('fs');

const installFile = fs
  .readdirSync('release/build')
  .find((file) => file.endsWith('.exe'));

exec(`release/build/${installFile}`, (err) => {
  console.log(err);
});
