//Prototype Inheritence

var Vehicle = function(){
  this.run = function(){
    return 'I can run';
  }
}

var TwoWheeler = function(){
   this.wheels = 2;
   this.getWheelCount = function(){
     return this.wheels;
   }
}

TwoWheeler.prototype = new Vehicle(); // notice "new" keyword here


var twoWheeler = new TwoWheeler();
console.log(twoWheeler.getWheelCount()) //2
console.log(twoWheeler.run()) //I can run


//Overrding

var BullockCart = function(){
  this.run = function(){
    throw new Error('I can not run');
  }
  
  this.pull = function(){
    return 'I can pull'
  }
}

TwoWheeler.prototype = new Vehicle();

var bullockCart = new BullockCart();
console.log(bullockCart.pull());
console.log(bullockCart.run())

