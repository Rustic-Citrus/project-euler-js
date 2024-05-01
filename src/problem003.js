export const largestPrimeFactor = (number) => {
  const factorsArr = []; // factors of number
  let counter = 0;
  let primeFactor = 0;

  // What are the factors of number?
  while (counter <= number) {
    if (number % counter == 0) {
      factorsArr.push(counter);
    }
    counter++;
  }

  // Which factors are prime numbers?
  for (let i = 0; i < factorsArr.length; i++) {

      // What are the factors of factorsArr[i]?
      const nestedFactorsArr = [];
      counter = 0;
      while (counter <= factorsArr[i]) {
          if (factorsArr[i] % counter == 0) {
              nestedFactorsArr.push(counter);
          }
          counter++;
      }

      // Is factorsArr[i] a prime number?
      if (nestedFactorsArr.length == 2) {
          primeFactor = factorsArr[i];
      }
  }

  return primeFactor;
}