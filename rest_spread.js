/* Rest */
const data = { name: 'a', address: 'b', phone: 'c', email: 'd' };
const { name,address, ...remainingData } = data;
console.log(name,address, remainingData);

/* accepts any number of parameters */
function testFn(...param) {
    console.log(param);
}
// console.log(testFn(1,2,3,4,5,'asdf',true));
const dataArray = ['red', 'green', 'yellow'];
const [first, ...remainingArrayVal] = dataArray;
console.log(remainingArrayVal);

/* Spread */

// spread copies all key:value from a given object 'data'.
const newData = { newKey: 'newValue', ...data };
console.log(newData);

const newArray = ['orange', ...dataArray];
console.log(newArray);

const objArr = [
    { name: 'User1', age: '20' },
    { name: 'User2', age: '25' },
    { name: 'User3', age: '25' },
    { name: 'User4', age: '25' },
    { name: 'User5', age: '25' },
];
console.log('objArr - ', objArr);

//Spread operator using apply()
function compare(a, b) {
    return a - b;
}
let result = compare.apply(null, [1, 2]);
console.log(result); // -1
// let result1 = compare(...[1, 2]);
// console.log(result1); // -1

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];
//[].push.apply(rivers, moreRivers);
rivers.push(...moreRivers);
console.log(rivers);
