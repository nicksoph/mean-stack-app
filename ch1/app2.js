require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

goodbye();
talk.intro();
talk.hello("fred");
var answer = question.ask("what?");
console.log(answer);