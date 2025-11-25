// let arr = [0, 1, "hello", 0.5, 5]
// console.log(arr)

// Array methods
//  let arr = [10, 20, 40, 60, 30];
//  let arr1 = [70 ,80, 50]

//  console.log(arr.length) // length method

//  console.log(arr.push(50)) // add new element in last of array.
 
//  console.log(arr.pop()) // remove last element of array
//  console.log(arr)

// console.log(arr.unshift(5)) // add element at start of the array
// console.log(arr)

// console.log(arr.shift(5)) // remove first element  of the array


// console.log(arr.slice(1 , 4)) // break the array in parts
// console.log(arr.indexOf(40)) // return index of an array element
// console.log(arr.lastIndexOf()) // return index of last element

// console.log(arr.concat(arr1)) // used to add two array

// console.log(arr.sort()) // print array in ascending number
// console.log(arr.reverse()) // print array in decending number



// Some  & Every method

// let ages = [10, 15, 18, 5];

// let result = ages.some(function(age){
// 	return age >= 28;
// })

// console.log(result) // If any one array element satisfied the condition then some method return 'TRUE' otherwise false


// let ages = [10, 15, 18, 5];

// let result = ages.every(function(age){
// 	return age >= 5;
// })

// console.log(result) // If every array element satisfied the condition then every method return 'TRUE' otherwise false

let ages = [10, 15, 18, 5];

let result = ages.filter(function(age){
	return age >= 11;
})

console.log(result) // retun filter data in new array
 

