<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CMPS 260: Module 1 Homework</title>
<style>* { font-family: monospace; }</style>
<script>

// NOTE: You can enter both code and explanations. For an explanation, start
//       the line with '//' which indicates a comment.

// NOTE: console.log prints text to the browser console that you can enable
//       to see the output. It is a little bit more convenient than alert so
//       we will use it most of the time.

// NOTE: Please review the following links regularly:
//       https://appliedcomputerscience.org/arrays-vs-objects
//       https://appliedcomputerscience.org/no-prototype-vs-prototype
//       https://appliedcomputerscience.org/implementation-vs-interface



//----------------------------//
// Setting up the environment //
//----------------------------//
console.log("Setting up the environment");
console.log("evvironement is acting stupid");

// 1. When you are done copy this file to your jail and submit the link through Schoology.



//-------------------//
// JavaScript basics //
//-------------------//
console.log("JavaScript basics");

// 1. Figure out what the << operator does. HINT: it is related to &.
// ... type your answer here and include an example ...

// The << operator shifts the first integer that the specified number of bits to the left
 const baha = 5;        
const boyz = 2;

console.log(baha << boyz);

//--------------------//
// Control structures //
//--------------------//
console.log("Control structures");

// 1. Write an if statement that prints the number of days in a month to the console (using 3 letter abbreviations).
if (month === 'Jan' || month === 'Mar' || month === 'May' || month === 'Jul' || month === 'Aug' || month === 'Oct' || month === 'Dec') {
  console.log('31 days');
} else if (month === 'Apr' || month === 'Jun' || month === 'Sep' || month === 'Nov') {
  console.log('30 days');
} else if (month === 'Feb') {
  console.log('28 days');
}
// ... put if here ...

// 2. Write a loop to calculate 1+2+3+...+n and print it to the console.
var n = 50;
// ... put loop here ...
for (var i = 1; i <= n; i++) {
  console.log(i);
}



//-----------//
// Functions //
//-----------//
console.log("Functions");

// 1. Write a function to check if an array contains a specific number but is not at the start or the end.
function checkForNumber(arr, num) {
  // modify
  if (arr.includes(num) && arr.indexOf(num) !== 0 && arr.indexOf(num) !== arr.length - 1) {
    return true;
  } else {
  return false;
}
console.log("Checking for number: " + checkForNumber([4, 2, 5, 3], 4)); // should be false
console.log("Checking for number: " + checkForNumber([4, 2, 5, 3], 3)); // should be false
console.log("Checking for number: " + checkForNumber([4, 2, 5, 7, 3], 2)); // should be true
console.log("Checking for number: " + checkForNumber([4, 2, 5, 7, 3], 13)); // should be false
console.log("Checking for number: " + checkForNumber([4, 2, 5, 5], 5)); // should be false



//-------------------------------------------//
// Object-oriented programming in JavaScript //
//-------------------------------------------//
console.log("Object-oriented programming in JavaScript");

// 1. Add methods to the following object to calculate the circumference and area.

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.circumference = function() {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// ... add getCircumference and getArea methods ...
// HINT: use the prototype

var rectangle = new Rectangle(10, 5);
//console.log("The circumference for the rectangle is " + rectangle.getCircumference());
//console.log("The area for the rectangle is " + rectangle.getArea());



//---------------------//
// Debugging and tools //
//---------------------//

// None.



//-----------------------------------------------//
// Introduction to ECMAScript 6 and ECMAScript 7 //
//-----------------------------------------------//

// None.



//---------//
// Project //
//---------//

// Normally a bigger programming task follows at the end.
// We skip this in the first week.

</script>
</head>
<body>
  See Console!
</body>
</html>