// const x=3;
// x+=4;
// console.log(x);
//ES5
add();
function add(){
    let x =2;
    console.log(x);
}
//console.log(x); // results error limited scope

//hoisting of variables and functions  in Es6
//ES6
//a();  //error
const a = ()=>{
    var y = 4;
    console.log(y);
};
a();
//Parameter Es6
const  b = (num1,num2)=>{
    let c= num1+num2;
    console.log(c);
}
b(5,6);

//  const x=()=>{
//     console.log('hello');
// }
// x();

