var filename = "index.js";


var hello = function (name) {
    console.log("hello " + name);
};

var intro = function () {
    console.log("Im a node file called from " + filename);
};

module.exports = {
    hello: hello,
    intro: intro
};