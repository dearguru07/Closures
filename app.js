// var a=25
// function b(){
//     console.log('Hello world.....')
// }
// console.log(a)
// b()
// console.log(b)

// let heading=document.createElement("h3")
// heading.innerHTML="<h3 style={color}>Namastee js </h3>"

// try {
//   let result = someFunction(); // If `someFunction` is not defined, an error is thrown
//   console.log("Result:", result); // This line won't run if there's an error
// } catch (error) {
//   console.error("An error occurred:", error.message); // Handles the error
// } finally {
//   console.log("This will always run"); // Executes whether there was an error or not
// }

// let a;
// console.log(a)

// function x() {
//   var a = 20;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// let res=x();
// console.log(res)
// res()

// let s=function (para1){
//     console.log(para1)

// }
// s(function (){

// })


let values = [1, 25, "e", "h", "guru", 85];
let numbs = [];
let strings = [];

values.forEach((ele) => {
  if (typeof ele === "string") {
    strings.push(ele);
  } else {
    numbs.push(ele);
  }
});
console.log(numbs);
console.log(strings);
