#!/usr/bin/env node

var child_process = require('child_process');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

if ( argv.length > 1 ) {
  var first_arg = argv[0];
  if ( first_arg == '-h' || first_arg == '--help' ) {
    console.log('mgi');
  }
}

// execFile: executes a file with the specified arguments
child_process.execFile(file_path + '/install.sh',null,{cwd:current_path},function (error,stdout,stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});