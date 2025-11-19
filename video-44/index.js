// function add(x,y){
//   return x+y
// }
// console.log(add(4,5));

// Arrow Function syntax

const functionName = (parameters)=>{
	// code here
}
functionName()

// const sum = (a,b)=>{
//   return a+b
// }


// One-line arrow function 
const sum = (a,b) => a+b;
console.log(sum(8,2));

// Arrow function without parameter

const hello = ()=>{
	console.log("Hello Students !")
}
hello()

const hello2 =()=> console.log("Hello Students !");
hello2()

// Arrow function with 1 parameter

const square = n => n * n 
console.log(square(4))

// Multi line arrow function

const getUser = ()=>{
	const name = "Ram";
	const age = 24;
	return {name , age}
}
console.log(getUser())