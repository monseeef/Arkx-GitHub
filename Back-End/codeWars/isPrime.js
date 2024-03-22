function isPrime(num) {
  //TODO
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(9));
console.log(isPrime(-23));
console.log(isPrime(23));
