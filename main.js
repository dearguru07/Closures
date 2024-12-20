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



function v() {
  var k = 20;
  function a() {
    var b = 8;
    function x() {
      console.log(b, k);
    }
    x();
  }
  a();
}
v();
