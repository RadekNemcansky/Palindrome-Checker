//querry Selector Returns the first matching Element node from document
// const name = document.querySelector(".cssselector")
//element.addEventListener("click", myFunction); adds event of chosen element from DOM
//modal.style.display = "block"; // object.style.display = value changing the display style of modal, Element is rendered as a block-level element

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");


btn.addEventListener("click", palindrome);
//madam

function palindrome() { // inside this function I create variable that will target inputs
  const word = document.querySelector(".input-text").value
  let len = word.length; //e.g. 10 

  let start = word.substring(0, Math.floor(len /2 )).toLowerCase();
  /* alert(start)  */
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
 

  //let flip = end.split("").reverse().join("");
  
  let flip = [...end].reverse().join("");
  
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`
  } else {
    result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`;
  } 
}

      