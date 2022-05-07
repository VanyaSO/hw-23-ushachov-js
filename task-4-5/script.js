'use strict'

//Task4
console.log('//Task4');

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let number in arr){
    sum += arr[number];
}
console.log(sum);

//Task5
console.log('//Task5');

const arrSecond  = [1, 2, 3, 4, 5];
let sumSecond = 0;

for (let number in arrSecond){
    sumSecond += Math.pow( arrSecond[number], 2 );
}
console.log(sumSecond);