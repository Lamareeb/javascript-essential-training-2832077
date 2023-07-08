/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
   toggleLid: function (lidStatus) {
   //set value of lidOpen property in this case is auto set to false above
    this.lidOpen = lidStatus; //statement
     
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

console.log("Strap Left Before: ", backpack.strapLength.left);

//run the method and reassign the values
backpack.newStrapLength(11,21);
//display the new values
console.log("Strap Length Left After: ", backpack.strapLength.left);
console.log("Strap Length Rght After: ", backpack.strapLength.right);
/* a function changes values
 use parens to pass vars, wrap curlies around the functions


 Classes:
 change properties, they apply to all instances of that class

*/