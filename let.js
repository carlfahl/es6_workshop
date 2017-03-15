// Example of block level scope with the let keyword

function test () {
  var x = 10; // function level scope.

  for (let i=0; i<5; i++) { // 
    console.log(i);
  }

  for (var j=0; j<5; j++) {
    console.log(j);
  }

  console.log("now j is ", j);
  console.log(x);
  try {
    console.log("now i is ", i);  // this causes an error, i is not defined
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log('i is not defined.');
    }
  }
}

test();

function constTest() {
  // const variables are read only and block scoped.
  const x = 10;

  if (true) {
    const x = 10;
    const y = 15;
    const z = 4;
  }

  console.log(z); // z is not defined here.
  x = 12; // cannot reassign to a const variable.
}

constTest();
