/* Set */

const arr = [1,23,3];
const obj = { key: 'value'};
const collection = new Set(); //setting the value
collection.add(1);
collection.add([1,23,3]);
collection.add(arr);
collection.add(obj);
//console.log(collection);

collection.forEach(each => {
console.log(each);
 });