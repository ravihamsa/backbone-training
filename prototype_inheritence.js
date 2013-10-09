//Prototype Inheritence

var Vehicle = function(){
  this.run = function(){
    console.log('I can run');
  }
}

var TwoWheeler = function(){
   this.wheels = 2;
}

TwoWheeler.prototype = new Vehicle(); // notice "new" keyword here
