//Dynamic Language

//in scrit1.js
var myVariable = "I am from script1.js";

//in script2.js
var myVariable = "I am from script2.js";

//some where down the line
console.log(myVariable); // I am from script2.js




//Basic Data Types

var myString = "String";

var myNumber = 1;

var myBoolean = true;

var myUndefined = undefined;

var myNull = null;


//Complex Data Types

var myObject = {} //basically a map
var myArray = [1,2,3,4,5]
var myFunction = function(){
  console.log('Function is a first class citizen in JavaScript')
}


//Other Data Types
var floored = Math.floor(0.12) //0
var currentTimeStamp = new Date().getTime() //milliseconds since "Thu Jan 01 1970"


