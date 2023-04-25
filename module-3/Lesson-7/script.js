// 1 - mashq
// let array = [];
// for (let i = 0; i <= 100; i++) {
//     array.push(i);
// }
// console.log(array);

// 2 - mashq
// let array = [];
// for ( let i = 0; i <= 5; i++) {
//     array[i] = 2 ** i;     
// }
// console.log(array);

// 3 - mashq
// let array = [1, 2, 3, 4, 5, 6];
// console.log(array.reduce((num1, num2)  => num1 + num2));

// 4 - mashq
//  let numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//  let evenNumbers = [];
//  let oddNumbers = [];

//  for (let i = 0; i < numbers.length; i++) {
//     if(i % 2 === 0 ) {
//         evenNumbers.push(i);
//     }
//     else{
//         oddNumbers.push(i);
//     }
//  }

//  console.log( evenNumbers.reduce((a, b) => a + b), oddNumbers.reduce((n, m) => n + m));

// 5 - mashq
// let num = prompt("Sonni kiriting");
// let arrayNum = [];
// for( let i = 1; i <= num; i++) {
//     arrayNum.push(i);
// }
// let arrayTotal = arrayNum.reduce((num1, num2)  => num1 + num2);

// console.log(arrayNum);
// console.log(arrayTotal);

// 6 - mashq
// let num = +prompt("Sonni kiriting :");
// let arrayNum = [];

// for( let i = num; i > 0;  i--) {
//     arrayNum.push(i);
// }
// console.log(arrayNum);

// 8 - mashq

// let numFirst = 10;
// let numSecond = 4;
// let numThird = 7;
// let total = [];
// for( let i = 1; i <= numFirst; i++) {
//       total += i;
//       let totalNum = total.slice( numSecond, numThird);
//       return totalNum.reduce((num1, num2)  => num1 + num2);
// }

// 9 - mashq 
// let num = +prompt("Sonni kirirting :"); 
// let array = [];
// let arrayTotal = [];
// for( let i = 1; i <= num; i++) {
//       array.push(i)
//       if ( i % 2 === 0 ) {
//            arrayTotal.push(i)
//       }
// }
// console.log( array );
// console.log(Math.max(...arrayTotal) + " eng katta son");

// 10 - mashq
// let num = +prompt("Sonni kirirting :"); 
// let array = [];
// let arrayTotal = [];
// for( let i = 2; i <= num; i++) {
//       array.push(i)
//       if ( i % 2 === 0 ) {
//            arrayTotal.push(i)
//       }
// }
// console.log( array );
// console.log(Math.min(...arrayTotal) + " eng kichkina son");

// 11 - mashq
// let num = +prompt("Sonni kirirting :"); 
// let array = [];
// let arrayTotal = [];
// for( let i = 1; i <= num; i++) {
      
//       if ( i % 2 === 1 ) {
//            arrayTotal.push(i);
//            array.push(i);
//       }
      
// }
// console.log( array );
// console.log(Math.max(...arrayTotal) + " eng katta son");


// 12 - mashq 
// let num = 10;
// let array = [];
// let count = 0;
// for( let i = 1; i <= num; i++) {
//       array.push(i);
//       count += (array.reduce((num1, num2)  => num1 + num2)) / array.length;                     
// }                                                     
// console.log(count);
