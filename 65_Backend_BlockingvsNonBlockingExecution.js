// The code which runs via line by line execution is known as synchronous or blocking code. It means the line of code written first, will be executed first. On the other hand, a block of code where line by line execution is not guaranteed is known as asynchronous or non-blocking code. These types of codes accept a call-back function.

// In the last tutorial, we made a file to read the contents with the help of fs.readSync() function. The Sync here stands for synchronous execution. Let us modify the same example and made the code only to read the file as follows-
// const fs = require("fs");
// fs.readFile("tempFileForEdit", "utf-8", (a,b)=>{
//     console.log(a,b);
// });
// console.log("This is a message");
// In the above example, a is null and b is the content of the file. Or rather, if go according to the official website of Node.Js, then a can be called as error and b can be called as the data. So the final code now goes 
const fs = require("fs");
fs.readFile("tempFileForEdit", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("This is a message");

// The main thing to notice after executing the above code is, we are getting the output “This is the message” first, and then the callback function is
// The reason for this is, it is an asynchronous function. It allows the readFile() function to read the file completely. By the time the code is reading the file, the next block of code is executed. And when the reading is completed, it then prints the data. 
// It does not mean that the code is not executed line by line. The code is executed synchronously but the output we get depends upon the time taken while reading the file. An asynchronous function is used here because it does not allow the code to block the user. If we use the asynchronous function here, then the file will be first read and then the next line will be executed. 