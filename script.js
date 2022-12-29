// let count = 0;
// (function () {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

// for (var i = 0; i < 3; i++) {
//     console.log("UP:",i)
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//     console.log("DOWN:",i)
//   }

// function lenFun(l){
//     function brFun(b){
//         return l*b;
//     }
//     console.log(brFun(20));
// }

// lenFun(10)

// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// function f1() {
//     var counter=0;
//     function f2() {
//         return counter+=1;
//     }
//     return f2
// }

// var f1=f1()
// console.log(f1())

// var a = 12;
//         (function () {
//         alert(a);
//         })();


// var a = 10;
//     var x = (function () {
//         var a = 12;
//             return function () {
//                 alert(a);
//             };
//     })();
// x();

// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';
    
//     (function innerFunc(innerArg) {
//     var innerVar = 'b';
    
//     console.log(
//         "outerArg = " + outerArg + "\n" +
//         "innerArg = " + innerArg + "\n" +
//         "outerVar = " + outerVar + "\n" +
//         "innerVar = " + innerVar + "\n" +
//         "globalVar = " + globalVar);
    
//     })(456);
// })(123);