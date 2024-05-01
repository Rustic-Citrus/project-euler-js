function fiboEvenSum(n) {
    let sum1 = 0;
    const arr = [1, 2];
    while (sum1 < n) {
      sum1 = arr[arr.length-1] + arr[arr.length-2];
      arr.push(sum1);
    }

    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sum2 += arr[i];
      }
    }

    return sum2;
  }

console.log(fiboEvenSum(10))