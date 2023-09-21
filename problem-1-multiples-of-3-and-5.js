function multiplesOf3and5(number) {
    let counter = 0;
    const arr = [];
    while (counter < number) {
      if (counter % 3 == 0 || counter % 5 == 0) {
        arr.push(counter);
      }
      counter++;
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
  }
  
  console.log(multiplesOf3and5(1000));
