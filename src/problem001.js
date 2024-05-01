export const multiplesOf3and5 = (number) => {
  let counter = 0;
  const arr = [];
  while (counter < number) {
    if (counter % 3 == 0 || counter % 5 == 0) {
      arr.push(counter);
    }
    counter++;
  }

  let sum = 0;
  
  for (const element of arr) {
    sum += element;
  }
  
  return sum;
}