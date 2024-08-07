// if we want to run the onclick method by using functions 
let text=document.getElementById("text");
function appendToDisplay(input){
text.value+=input;
console.log(input)
}
function EraseAll(){
  text.value="";
}
function Erase(){
  text.value=text.value.slice(0,-1);
}
function displayError(){
try{
  text.value=eval(text.value);
  console.log(text.value)
}
catch(error){
  text.value="ERROR";
}
}



// make calculator by using js
// let string = "";
// let buttons = document.querySelectorAll(".btn");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       try{
//         string = eval(string);
//       document.getElementById("text").value = string;
//       }
//       catch(err){
//         string="ERROR"
//       document.getElementById("text").value = string;
//       }
//     } else if (e.target.innerHTML == "C") {
//       string = "";
//       document.getElementById("text").value = string;
//     } else if (e.target.innerHTML == "⌫") {
//       string = string.slice(0, -1);
//       document.getElementById("text").value = string;
//     } else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.getElementById("text").value = string;
//     }
//   });
// });



