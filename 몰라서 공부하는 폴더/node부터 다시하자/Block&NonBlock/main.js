// const fs = require("fs");
// var data = fs.readFileSync('./input.txt');

// console.log(typeof data);
// console.log(data.toString());
// console.log("Program has Ended")

var fs = require("fs");

fs.readFile('input.txt', function(err,data){
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program has ended")