//Triangle challenge

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(5, 4, 6));
