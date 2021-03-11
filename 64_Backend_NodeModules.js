// The modules in Node.Js are the same as JavaScript libraries. These are the set of functions that we want to include in our application.

// The first step is to include the module with the help of the following code-

// const fs = require("fs");
// The next step is, we have to write the name of the file, which we want to read. 
// const text = fs.readFileSync("tempFileForEdit", "utf-8");
// The function readFileSync synchronously reads the entire contents of a file.
// Finally, the last step is to print
// console.log(text);

// We can also write it as follows-
// const fs = require("fs");
// const text = fs.readFileSync("tempFileForEdit", "utf-8");
// console.log("The Content of the file is");
// console.log(text);

// We can also make a new file and replace the content of the original file.
const fs = require("fs");
let text  = fs.readFileSync("tempFileForEdit", "utf-8");
text =  text.replace("Hello", "Hola");
// Now we have to make a new file in which we will write the above text. 
console.log("Creating new File...");
fs.writeFileSync("newHolaText.txt", text); // The writeFileSync() function is used to write the file



