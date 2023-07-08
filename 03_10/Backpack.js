/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

//classes are only used inside javascript, not in browser
//names have capital letter first
//declare the class, can use expression "const" = as well which is most commonly used
// constructor creates the object, defines the parameters, list of properties,
//inside curlies set the values
//the constructor is a method inside the class
//
class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    //
    // Define properties:
    //below is the constructor method
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions to the class:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  //newStrap method
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;
