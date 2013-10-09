//Dynamic Language

//in scrit1.js
var myVariable = "I am from script1.js";

//in script2.js
var myVariable = "I am from script2.js";

//some where down the line
console.log(myVariable); // I am from script2.js




//Literal Data Types

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




//Literals passed by value, Others by Reference

var a=20, b=30;
var add = function(number1, number2){
  number1 = 10;
  return number1 + number2;
}

console.log(add(a,b)); //40 not 50;
console.log(a); //20


var a = [20,30]

var addArrayMembers = function(numberArray){
  numberArray[0] = 10;
  return numberArray[0]+numberArray[1]
}

console.log(addArrayMembers(a)) // 40
console.log(a[0]) //10 not 20;


