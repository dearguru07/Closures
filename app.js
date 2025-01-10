// var a = 1;
// b();
// c();
// console.log(a);
// function b() {
//   var a = 10;
//   console.log(a);
// }
// function c() {
//   var a = 100;
//   console.log(a);
// }

// const numbers = [1, 25, 7, 6, 3];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Sum of the array:", sum);

// const input = "Hello World";
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// const result = [];
// for (let i = 0; i < input.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (input[i] === vowels[j]) {
//       result.push(input[i]);
//       break;
//     }
//   }
// }
// const vowelsInStrings = result;
// console.log("Vowels in the string:", vowelsInStrings); // Output: ['e', 'o', 'o']

// function findVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const result = [];

//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         result.push(str[i]);
//         break;
//       }
//     }
//   }

//   return result;
// }

// const inputs = "Hello World";
// const vowelsInString = findVowels(inputs);
// console.log("Vowels in the string:", vowelsInString); // Output: ['e', 'o', 'o']

// const inpuTwo = "Hello world..a,e,i";
// const vowelsTwo = ["a", "e", "i", "o", "u"];
// const res = [];

// for (let i = 0; i < inpuTwo.length; i++) {
//   for (let j = 0; j < vowelsTwo.length; j++) {
//     if (inpuTwo[i] === vowelsTwo[j]) {
//       res.push(inpuTwo[i]);
//     }
//   }
// }
// const resTwo = res;
// console.log(resTwo);

// var count=0
// function increment(){
//   count++
//   console.log(count)
// }
// increment()

// function increment() {
//   var count = 0;
//   count++;
//   console.log(count);
// }
// var res=increment();
// res()

// function a(){
//   var b=10
//   function c(){
//     console.log(b)
//   }
//   return c
// }
// a()()

// function a(){
//   var b=10
//   function c(){
//     console.log(b)
//   }
//   return c
// }
// a()()
// function a(){
//   var b=10
//   function c(){
//     console.log(b)
//   }
//   return c
// }
// a()()

// genarateOTP-------------

// function genarateOTP(){
//   let otp=''
//   otp=Math.floor(Math.random()*9999)
//   return otp
// }
// console.log(genarateOTP())

// removing the duplicate values---

// let array=[1,2,5,7,8,5,2,1,4,6,6]
// let res=[...new Set(array)]
// console.log(res)

// let string=["guru",'charan','ramu','seeta','geeta','seeta','guru','ram']
// let sol=[...new Set(string)]
// console.log(sol)

// polyndrome----------

// function Polyndrome(str){
//     const reverse=str.split("").reverse().join("")
//     if(str===reverse){
//       console.log('poly')
//     }
//     else{
//       console.log('not plou')
//     }
// }
// Polyndrome('madam')

// Filter example------------

// const Heros = [
//   "Mahesh",
//   "Chaithanya",
//   "akhil",
//   "Ramcharan",
//   "Pawan",
//   "Nihkil",
//   "Munna",
//   "Martan",
// ];
// function FindActor(Heros, inital) {
//   return Heros.filter((Heros) => Heros.startsWith(inital));
// }
// const res = FindActor(Heros, "M");
// console.log(res);

// function Find(Heros, inital) {
//   return Heros.filter((Heros) => Heros.startsWith(inital));
// }
// let solu = Find(Heros, "C");
// console.log(solu);



// function a() {
//   var x = 10;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();


let numbers=[1,25,4,8]
let sol=numbers.reduce((acc,curr)=>
    acc+curr
,0)
console.log(sol)

const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
