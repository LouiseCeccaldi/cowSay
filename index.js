const myInformation = require('./information.js');

const cowsay = require('cowsay');

console.log(
    cowsay.think({
    text: `Hello, I'm ${myInformation.name} from ${myInformation.campus}`,
})
);