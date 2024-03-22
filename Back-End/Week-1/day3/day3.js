// Arrays & Loops ---

// Task 1 : Speed run !!

// 01 ---

let res1 = 0;
function sum(num) {
    for (let i = 0; i < num.length; i++) {
        res1 = res1 + num[i];
    }
    return res1;
}
let arrNum1 = [1, 6, 9, 4];
res1 = sum(arrNum1);
console.log(res1);


// 02 ---

let res2 = 0;
function countEven(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            res2++;
        }
    }
    return res2;
}
let arrEven = [1, 4, 9, 20, 6];
res2 = countEven(arrEven);
console.log(res2);

// 03 ---

let res3 = [];
function double(num) {
    for (let i = 0; i < num.length; i++) {
        res3[i] = num[i] * 2;
    }
    return res3;
}
let arrDouble = [3, 5, 10, 9];
res3 = double(arrDouble);
console.log(res3);

// Task 2 : The pair of


