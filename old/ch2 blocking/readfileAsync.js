// var fs = require('fs');


// console.log("going to get a file");

// fs.readFile('readFileSync.js', function (err, file) {
//     console.log("got file");
// });

// console.log("carries on");

var fs = require('fs');

var onLoad = function(err, file){
  console.log("got file");
};
console.log("going to get a file");
fs.readFile('readFileSync.js', onLoad);
console.log("carries on");

