console.log("hey there i am here")

// console.log(window) GIVES ERROR BECAUSE DOM FUNCTIONS ARE NOT LINKED WITH C++

// NPM - node package LockManager
// 1--> it create a templates that are used to run a project


// day-2

const maths = require("./day2"); // require is an builtin function in nodejs for importing modules from which file

const {add,sub} =  require("./day2")

// console.log(math)

console.log("my add is",maths.addFn(2,4));
console.log("my sum is",maths.sunFn(2,4));

console.log("my add is",maths.add(2,4));
console.log("my sum is",maths.sub(2,4));


console.log("my add is",add(2,4));
console.log("my sum is",  sub(2,4));