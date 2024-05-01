export const fibonacciEvenSum = (n) => {
  let sum1 = 0;
  const arr = [1, 2];
  while (sum1 < n) {
    sum1 = arr[arr.length-1] + arr[arr.length-2];
    arr.push(sum1);
  }

  let sum2 = 0;

  for (const element of arr) {
    if (element % 2 == 0) {
      sum2 += element;
    }
  }

  return sum2;
};