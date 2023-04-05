/* Template literal */

const str1 = 2;
const str2 = {name: 'Ankit'};
console.log(str1 + " " + str2);

const str3 = 'Hello I am ankit';
console.log(str3); //templete lliterals in ES6

function getName(param){
    return param;
} 
const result = `Good morning, ${str1} ${getName('test')}`;
console.log(result);