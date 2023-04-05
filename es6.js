// //arrow functions

// const x = ()=>{
//     let a=5;
//     let b=4;
//     console.log(a*b);
// }
// x();

// z(3,4); //cause error , initialize and memory allocate garnu parxa then balla code execute
// const z = (a,b)=>{
//     const z = a+b;
//     console.log(z);
// }

// //Symbol datatype
// const sym = Symbol("foo");
// console.log(typeof sym); // "symbol"

//  const symObj = Object(sym);
// console.log(typeof symObj); // "object"

// const alpha = ['a', 'b', 'c'];
// const numeric = [1, 2, 3];
// let alphaNumeric = alpha.concat(numeric);
// console.log(alphaNumeric);
// // Expected output: Array ["a", "b", "c", 1, 2, 3]

// numeric[Symbol.isConcatSpreadable] = false;
// alphaNumeric = alpha.concat(numeric);
// console.log(alphaNumeric);
// // Expected output: Array ["a", "b", "c", Array [1, 2, 3]]

class Replace1 {
    constructor(value) {
      this.value = value;
    }
    [Symbol.replace](string) {
      return `s/${string}/${this.value}/g`;
    }
  }
  console.log('foo'.replace(new Replace1('bar')));

  