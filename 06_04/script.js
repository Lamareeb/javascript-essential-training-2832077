/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */
//global scope let
let color = "purple";
//first two take the first variable declaration of purple
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";


//block scoped variables
function headingColor() {
  //local scope variable let, only applies in here
  //separate from everything else
  let titleColor = "blue";
  document.querySelector(".title").style.color = titleColor;
  console.log("inside:", titleColor);
}
//call headingColor function or it won't apply
headingColor();

//can't use this, titleColor is outside of it's scope
console.log("outside:", titleColor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
