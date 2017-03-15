//create a set
var set = new Set();

//add three keys to the set
set.add({x: 12});
set.add(44);
set.add("text");
set.add(44); // Set only contain unique values.

// Print out all the values of the set.
for (let i of set) {
  console.log(i);
}

//check if a provided key is present
console.log(set.has("text"));

//delete a key
set.delete(44);

//loop through the keys in an set
for(var i of set)
{
    console.log(i);
}

//create a set from array values
var set_1 = new Set([1, 2, 3, 4, 5, 5, 5]); // extra 5s are ignored.

//size of set
console.log(set_1.size); //5

console.log(set_1.values());

//create a clone of another set
var set_2 = new Set(set.values());
