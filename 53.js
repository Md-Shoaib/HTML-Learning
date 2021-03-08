// console.log("This is js file");

// Function

// we can increase more number of parameters in the JavaScript functions without writing the code again.
function greet(name, greetText) {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

// variables
let name = "Harry";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";

// We also use some functions to make it return a particular value. Return value means it gives you some output in return
// let returnVal1 = greet(name3);
// console.log(returnVal1); //The output will be undefined because the parameter greet does not return anything

//  It just prints the value through console.log. But if we make a new function
function sum(a, b, c) {
    let d = a + b + c;
    return d;
}
let returnVal = sum(1, 2, 3);
console.log(returnVal)

// Calling the function
// greet(name, greetText);
// greet(name1, greetText);
// greet(name2, greetText);
// greet(name3, greetText);
