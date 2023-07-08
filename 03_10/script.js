/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

//call the backpack.js to create a new instance of the backpack object
import Backpack from "./Backpack.js";

//create new variable and fill with a new backpack name it "everydayPack"
//then set the variables
const everydayPack = new Backpack(
  "Everyday 3 Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

//to create a new object, 
const secondPack = new Backpack(
  "Everyday second Backpack",
  110,
  "red",
  11,
  22,
  33,
  true
);


//console them out
console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);


console.log("The second pack values:", secondPack);

//create several objects, call from index.js