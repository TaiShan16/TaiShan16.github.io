// functions are blocks of code that are designed to perform
// specific tasks

// functions are invoked when something calls it

/*
    function nameoffunction(optional params)
    {
        statement(s);
    }
*/

// simple output function
function printHello()
{
    // display a message in the id named 'printHello'
    document.getElementById("printHello").innerHTML = "Hello There!";
}

// call the printHello function
printHello();

// this function accepts two values as parameters
function addition(a, b)
{
    // a and b are parameters that can be used in the function statements
    // local variable that holds the sum of the values
    var s = a + b;

    // return the calculated value of the sum (local variable)
    return s;
}

// call on the function and store the result in a variable
var sum = addition(3, 5);

// place the sum into the output id named 'addition' in our HTML
document.getElementById("addition").innerHTML = "3 + 5 = <b>" + sum + "</b>";

// JS Built in functions
let longDecimalValue = 2313.327896278;
// use Math.floor() to round a value down
let roundedDown = Math.floor(longDecimalValue);
// use Math.ceil() to round a value up
let roundedUp = Math.ceil(longDecimalValue);

// display the rounded values in the id named 'rounded'
document.getElementById("rounded").innerHTML = longDecimalValue + " rounded up using .ceil(): <b>"+ roundedUp + "</b> <br> " + longDecimalValue + " rounded down using .floor(): <b>"+ roundedDown + "</b>";

// array of strings
var fruits = ["Apple", "Orange", "Banana", "Cherry", "Strawberry", "Mango"];

// variable that will hold the string version of the array
var output = "[";

// use a loop to access the items in the array and add to the output string
for (var i = 0; i < fruits.length; i++)
{
    // add on the text to the output
    if (i != fruits.length - 1)
        output += fruits[i] + ", "; // if not at the last index in the array
    else
        output += fruits[i] + "]"; // if we do get to the last index in the array
}

// output the output string to the id named 'arrayContents1'
document.getElementById('arrayContents1').innerHTML = output;

// make an empty array and then generate random numbers to populate the array
var numbers = [];

// use .floor() and .random() to generate a series of values (between 1 and 10)
var count = 5 + Math.floor(Math.random() * 11); // Math.random() generates a decimal between 0 
                                            // and 1
                                // multiplying times 11 generates a decimal between 5 and 15 or 16 numbers

// use a for loop to add count numbers to the array .push()
for (var i = 0; i <= count; i++)
{
    numbers.push(Math.floor(Math.random() * 100)); // generate a value between 0 and 100 and add to the array
}

// generate the output again
output = "[";

/*
for (var i = 0; i < numbers.length; i++)
{
    if (i != numbers.length - 1)
        output += numbers[i] + ", ";
    else
        output += numbers[i] + "]";
}
*/

// populate using the .forEach() method
numbers.forEach((number, index) => {
    if (index != numbers.length - 1)
        output += numbers[index] + ", ";
    else
        output += numbers[index] + "]";
});

document.getElementById("arrayContents2").innerHTML = output;

/*
// function that multiplies a value times 3
function timesThree(value)
{
    return value * 3;
}
*/

// use .map() to apply an inline function to an array and make a copy of the 
// array with modified contents
/*var timesThree = numbers.map(function(number){
    return number * 3;
});*/

// can drop the word 'function'
/*var timesThree = numbers.map(number => {
    return number * 3;
});*/

var timesThree = numbers.map(number => {return number * 3});

// generate the output again
output = "[";

// populate using the .forEach() method
timesThree.forEach((number, index) => {
    if (index != timesThree.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});

document.getElementById("arrayContents3").innerHTML = output;

// use the .sort() function and pass in a function of sorting attributes
var sorted = numbers.sort(function sortFunction(a, b) {
    // where a and b are values in adjacent sequential indexes
    return b - a; // place the values in descending order
                  // when used with the .sort(), if the second number
                  // is greater than the first, put in descending order
                  // a - b for ascending order
});

// generate the output again
output = "[";

// populate using the .forEach() method
sorted.forEach((number, index) => {
    if (index != sorted.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});

document.getElementById("arrayContents4").innerHTML = output;

// use the .sort() function and pass in a function of sorting attributes
var sorted = numbers.sort(function sortFunction(a, b) {
    // where a and b are values in adjacent sequential indexes
    return a - b; // place the values in descending order
                  // when used with the .sort(), if the second number
                  // is greater than the first, put in descending order
                  // a - b for ascending order
});

// generate the output again
output = "[";

// populate using the .forEach() method
sorted.forEach((number, index) => {
    if (index != sorted.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});

document.getElementById("arrayContents5").innerHTML = output;

// can also use .reverse() function to reverse order of the elements

// use the .slice() function to get a subset of an array
// grab the first 4 items from the sorted array
var sliced = sorted.slice(0, 4);

// generate the output again
output = "[";

// populate using the .forEach() method
sliced.forEach((number, index) => {
    if (index != sliced.length - 1)
        output += number + ", ";
    else
        output += number + "]";
});

document.getElementById("arrayContents6").innerHTML = output;