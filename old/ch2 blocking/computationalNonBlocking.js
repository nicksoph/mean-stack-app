var childProcess= require('child_process');

console.log("1");

var subProcess = childProcess.spawn('node', ['_fibonachi.js'], {
    stdio : 'inherit'
});

console.log("2");
