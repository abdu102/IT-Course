// 1 - mashq
/*
let num = prompt("Sonni kiriting :");
if ( num % 2 ) {
    console.log("Sizning sonningiz toq son !");
}
else{
    console.log("Sizning sonnigiz toq son emas !");
}
*/
// 2 - mashq
/*
let num = prompt("Sonni kiriting :");

if ( num % 2 ) {
    console.log("Sizning sonningiz juft son  emas !");
}
else{
    console.log("Sizning sonnigiz juft son !");
}
*/
// 3 - mashq 
/*
let numFirst = prompt("Birinchi sonni kiriting");
let numSecond = prompt("Ikkinchi sonni kiriting");

if (numFirst > 0 && numSecond> 0) {
    console.log("Sizning sonningiz togri keldi !");
}
else {
    console.log("Sizning sonningiz togri kelmadi !");
}
*/
// 4 - mashq
/*
let numA = prompt("Birinchi sonni kiriting");
let numB = prompt("Ikkinci sonni kiriting");
let numC = prompt("Uchinci sonni kiriting");
if ( numA > numB && numB > numC) {
    console.log("Soningiz togri !");
}
else {
    console.log("Soningiz notogri !");
}
*/

// 5 - mashq
/*
let numA = prompt("Birinchi sonni kiriting");
let numB = prompt("Ikkinci sonni kiriting");
let numC = prompt("Uchinci sonni kiriting");

if ( numA < numB && numC > numB ) {
    console.log("Sonningiz A bilan B ni ichida");
}
else {
    console.log("Sonningiz A bilan B ni ichida emas");
}
*/  
// 6 - mashq
/*
let numA = prompt("Birinchi sonni kiriting");
let numB = prompt("Ikkinci sonni kiriting");

if ( numA && numB % 2 ) {
    console.log("Sizning sonnlaringiz toq");
}
else {
    console.log("Sizning sonnlaringiz toq emas");
}
*/


// 7 -mashq
/*
let numA = prompt("Birinchi sonni kiriting");
let numB = prompt("Ikkinci sonni kiriting");
let numC = prompt("Uchinci sonni kiriting");
let numD = prompt("Uchinci sonni kiriting");


if ( numA && numB && numC %% numD < 0) {
    console.log("Sizning sonnlaringiz musbat");
}
else {
    console.log("Sizning sonnlaringiz musbat emas");
}
*/

// 8 - mashq 
/*
let numA = prompt("Birinchi sonni kiriting");
let numB = prompt("Ikkinci sonni kiriting");
let numC = prompt("Uchinci sonni kiriting");

if ( numA && numB < 0 || numB && numC < 0 || numA && numC < 0) {
    console.log("Sizning sonnlaringiznu hotyabi ikkitasi musbat");

}
else {
    console.log("Sizning sonnlaringiznu hotyabi ikkitasi musbat bolishi shart");

}
*/

// 9 - mashq
/*
let days = prompt("Hafta kunini sonnini kiriting :");

if ( days == 1 ) {
     console.log("Dushanba kuni");
}

else if ( days == 2 ) {
    console.log("Seshanba kuni");
}

else if ( days == 3 ) {
    console.log("Chorshanba kuni");
}

else if ( days == 4 ) {
    console.log("Payshanba kuni");
}

else if ( days == 5 ) {
    console.log("Juma kuni");
}

else if ( days == 6 ) {
    console.log("Shanba kuni");
}

else if ( days == 7 ) {
    console.log("Oddix kuni");
}
*/
// 10 - mashq
/*
let code = prompt("Telefon raqamingizni kodini kiriting");
if ( code ==  93) {
    console.log("Ucell");
}
else if ( code == 90 ) {
    console.log("Beeline");
}

else if ( code == 98 ) {
    console.log("Perfectum");
}

else if ( code ==  66) {
    console.log("Infin");
}

else if ( code == 99 ) {
    console.log("Uzmobile");
}

else if ( code ==  94) {
    console.log("UMS");
}

else if ( code == 97 ) {
    console.log("Mobiuz");
}

else if ( code ==   909 ) {
    console.log("Billayn Rossiya");
}

else if ( code ==   910 ) {
    console.log("MTS Russiya");
}
else {
    console.log("Unday companiya yoq !");
}
*/

// 11 - mashq
/*
let num = prompt("Butun son kiriting !");
if ( num < 0) {
    console.log(++num)
}
else {
    console.log(--num);
}
*/
// 12 - mashq 

let num = +prompt("Son kiriting !");
if ( num < 0) {
    console.log( num + 3 );
}
else {
    console.log( num - 2 );
}


// 13 - mashq
/*
let numFirst = +prompt("Birrinchi sonni kiriting !");
let numSecond = +prompt("Ikkinchi sonni kiriting !");

if ( numFirst > numSecond) {
    console.log("Birinchi son kattaroq");
}
else {
    console.log("Ikinchi son kattaroq");
}
*/