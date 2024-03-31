function fibs(n) {
  let arr = [];
  if (n == 1) arr = [0];
  else if (n > 1) arr = [0, 1];
  for (let i = n - 2; i > 0; i--) {
    arr[arr.length] = arr[arr.length - 2] + arr[arr.length - 1];
  }
  return arr;
}

console.log(fibsRec(10));

function fibsRec(n) {
  let arr = [];
  if (n == 1) arr = [0];
  else if (n == 2) arr = [0, 1];
  else if (n > 2) {
    arr = [...fibsRec(n - 1)];
    arr[n - 1] = arr[n - 2] + arr[n - 3];
  }
  return arr;
}
