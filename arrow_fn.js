
//Arrow function with body
const a  = t =>{
    console.log("Hello");
}
a();

//Arrow function without body
const sum = (a, b) => a + b;
console.log(sum(1, 3));

const data = {
    name: 'asd',
    // getName: ()=> this.name,
    getName() {
        return this.name;
    },
    setName(param) {
        this.name = param; //this keyword set the name test to the property and replaced the value
        return param;
    }
};
//console.log(data.getName());
console.log(data.setName('test'), data.name);
