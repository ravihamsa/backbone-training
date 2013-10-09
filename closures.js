//Closures watch out for memory leaks

/*
When you declare a function inside a function, inner function will have access to variables
defined in outer function, even after completing execution cycle of outer function
*/

function sayHelloTo(name) {
    var text = 'Hello ' + name; // Local variable
    var sayAlert = function() { console.log(text); }
    return sayAlert;
}

var helloToRavi = sayHelloTo('Ravi');
helloToRavi()


/*
Common usecases:

1. private variables (relatively private)
2. maintaining context for asynchronus callbacks
3. preserving results or complecated computations
*/


//Global coutner example with private variable

var getUniqId = (function(){
    
    var count = 1;
    return function(){
        return count++;
    }
    
})()

console.log(getUniqId()) // 1
console.log(getUniqId()) // 2
