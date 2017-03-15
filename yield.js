// The for of syntax

var arr = [1,2,30,4,5,6];

for (i of arr) {
  console.log(i);
}

// Generator function - creates an iterator.
function* myGenerator(x,y,z) {
  yield x;
  yield y;
  yield z;
}

var myCollection = myGenerator(1,2,3);

for (var ii of myCollection) {
  console.log(ii);
}
