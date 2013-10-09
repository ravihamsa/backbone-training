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
