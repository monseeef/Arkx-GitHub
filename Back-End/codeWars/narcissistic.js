/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
 each raised to the power of the number of digits in a given base. 
 In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic: 
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 
 */

function narcissistic(value) {
  if (value === 0) {
    return false;
  }
  let res = 0;
  let num = value.toString();
  for (let i = 0; i < num.length; i++) {
    res += Number(num[i] ** num.length);
  }
  if (res === value) {
    return true;
  } else {
    return false;
  }
}
console.log(narcissistic(143));
console.log(narcissistic(153));
console.log(narcissistic(7));
