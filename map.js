//create a map
var map = new Map();

//add three keys & values to the map
map.set({x: 12}, 12);
map.set(44, 13);
map.set(44, 12); //same key is overwritten
map.set(43, 12);

console.log(map);

//check if a provided key is present
console.log(map.has(44)); //true

//retrieve key
console.log(map.get(44)); //12

//delete a key
map.delete(44);

//loop through the keys in an map
for(var i of map)
{
    console.log(i);
}

//delete all keys
map.clear();

console.log('Cleared map: ', map);

//create a map from arrays
var map_1 = new Map([[1, 2], [4, 5]]);

console.log(map_1);

//size of map
console.log(map_1.size); //2
