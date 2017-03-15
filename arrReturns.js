// ES 6 allows multiple return values as an array.

function multipleReturn () {
  return ([10,5,16]);
}

var x,y,z;

var arr = multipleReturn();

[x,y,z] = multipleReturn();

console.log(arr);
console.log(y);
console.log(typeof(arr), typeof(y));

function defaultVals(x=1, y=2, z=3) {
  console.log(x,y,z);
}

defaultVals();
defaultVals(10,6);
defaultVals(4, undefined, 6);

//args variable is an array holding the passed function arguments
function function_one(...args)
{
    console.log(args);
    console.log(args.length);
}

function_one(1, 4);
function_one(1, 4, 7);
function_one(1, 4, 7, 0);


function function_two(a, b, ...args)
{
    console.log(args);
    console.log(args.length);
}

//"args" holds only 7 and 9
function_two(1, 5, 7, 9);

function function_name(a, b)
{
    console.log(a+b);
}

var array = [1, 4];

function_name(...array); //is equal to function_name(1, 4)
