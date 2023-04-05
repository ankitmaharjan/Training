// let amount = 500;
// function calc(param){
//     amount += param;
//     console.log(amount);
// }
//calc(100);


// const data = {}; //creating object
// data.name = {b: 'a'}; //yesto garesi just make change in name, name ma value janxa
//  console.log(data.name);

// const tempArray = []; //creating array
// tempArray.push(1);
// //tempArray = [1,2,3];
// console.log(tempArray);

/* reuses memory reference. */
// let a;
// [1,2,3].forEach(each =>{
//     a = each;
//     console.log(a);
// });

// let numbers=[1,2,3,4,5];
// numbers.forEach(value=>{
//     console.log(value);
//     value=numbers;
//     //console.log(value);
// })

let numbers=[1,2,3,4,5];
numbers.forEach((value,index)=>{  
    console.log("Value is"+value+" Index is"+index);
})
