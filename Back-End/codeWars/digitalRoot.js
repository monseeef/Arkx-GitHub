function digitalRoot(n) {
  let sum = 0;
//console.log(n % 10);
//console.log(n / 10);
while (n > 0 || sum >= 10) {
  if (n === 0) {
      n = sum;
      sum = 0;
    }
  let rem = n % 10;
  sum += rem;
  n = (n / 10) | 0 ;
}
return sum;
}
console.log(digitalRoot(456));