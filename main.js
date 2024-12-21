// function a(){
//     let b=10
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// a()

// let a = 20;
// var b = 10;
// function x(){
//     let z=45
//     console.log(z)
// }
// x()
// console.log(a)
// console.log(b)

// console.log(a)

// let a =20
// var b=10

// console.log('bkba')
// const a=10
// a=20
// console.log(a)

// let b = 10;
// {
//   var a = 100;
//   let b = 20;
//   const c = 30;

//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// // console.log(a);
// console.log(b);
// // console.log(c);

// var b=2000
// let a=10
// {
//     let a=20
//     {
//         let a=200
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)

// function x() {
//   const a = 20;
//   function y() {
//     const z = 25;
//     console.log(a);
//   }
//   y();
// }
// x();

// function a(){
//     var b=8
//     function x(){
//         console.log(b)
//     }
//     return x
// }
// let v=a()
// console.log(v)
// v()

// function v() {
//   var k = 20;
//   function a() {
//     var b = 8;
//     function x() {
//       console.log(b, k);
//     }
//     x();
//   }
//   a();
// }
// v();

// setTimeout(()=>{
//     console.log('hello world....')
// },2000)

// function x(){
//     var i=10
//     setTimeout(()=>{
//         console.log(i)
//     },3000)
// }
// x()



// function a() {
//   for (let i = 1; i <= 5; i++) {
//     function b(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     b(i)
//   }
// }
// a();


// function a(){
//   for (var i=1;i<=5;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },2000)
//   }
// }
// a()



// function a(){
//   for (let i=1;i<=5;i++){
//     console.log(i)
//   }
// }
// a()


// function a(){
//   for (var i=0;i<=5;i++){
//     function x(x){
//       setTimeout(()=>{
//         console.log(x)
//       },i*1000)
//     }
//     x(i)
//   }
// }
// a()


// function a(){
//   for (let i=1;i<=5;i++){
//     setTimeout(()=>{
//       console.log(i)
//     },2000)
//   }
// }
// a()


var a=10
let b=20
function x(){
  let b=50
  console.log(a)
  console.log(b)
}
x()