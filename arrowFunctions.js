// Arrow functions

// function add(a,b) {
  // return a + b;
// }

var add = (a,b) => a + b;

var anotherFunction = (a,b) => {
  var x = a + 1;
  var y = b + 4;
  return x + y;
}

console.log('The result is: ', add(1,2));
console.log('The second result is: ', anotherFunction(3,4));

var self = this;

function Person(){
  this.age = 34; // Person.age

  setTimeout(() => {
    console.log(this.age); //34
  }, 1000);

  // var self = this;
  setTimeout(function(){
    console.log(self.age); //34
  }, 1000);
}

var p = new Person();
