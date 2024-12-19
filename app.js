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



const numbers = [1, 25, 7, 6, 3];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of the array:", sum);



const input = "Hello World";

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
const result = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      result.push(input[i]);
      break;
    }
  }
}
const vowelsInStrings = result;
console.log("Vowels in the string:", vowelsInStrings); // Output: ['e', 'o', 'o']




function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        result.push(str[i]);
        break;
      }
    }
  }

  return result;
}

const inputs = "Hello World";
const vowelsInString = findVowels(inputs);
console.log("Vowels in the string:", vowelsInString); // Output: ['e', 'o', 'o']
