// when you use require('./'), node will quickly find the file and run it

const {people, test} = require('./people')
// very likely, you wrap the varibales from other file
// send it or export it to another file 
// like module is ask wrap the people and test variables
// by using {people, test} require from ('./people')
// in people file, it will wrap the requirement
// by using, module.exports = {people, test}
// two wraps so use 2 curly braces 
console.log(people, test)