/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
//targe specific elements, nested ones too, experiment with querySelector and querySelectorAll to see the 
//difference
// find some children


//use document selectors here to style the text
//querySelector is an
document.querySelectorAll("main h1").forEach(item => item.style.color = "red")
document.querySelectorAll("li:last-child").forEach(item => item.style.backgroundColor = "yellow")
document.querySelectorAll("main li").forEach(item => item.style.color = "black")
document.querySelectorAll("li:last-child").forEach(item => item.style.color = "blue")

document.querySelectorAll("header").forEach(item => item.style.color = "blue")

document.querySelectorAll("site-title").forEach(item => item.style.color = "yellow")
