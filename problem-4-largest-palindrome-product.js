function largestPalindromeProduct(n) {

    // What are all the integers that are n digits long?
    const numArr = [];
    const lower = 10 ** (n - 1);
    const upper = (10 ** n) - 1;
    for (let i = 0; i <= (upper - lower); i++) {
        numArr.push(lower + i);
    }
    // console.log(numArr);
    
    const palindromes = [];
    for (let i = 0; i < numArr.length; i++) {
        for (let j = 0; j < numArr.length; j++) {
            
            // What is the product of the two numbers?
            let product = numArr[i] * numArr[j];

            // Is the product a palindromic number?
            let productString = product.toString();
            let count = 0;
            for (let k = 0; k < productString.length; k++) {
                if (productString[k] == productString[productString.length - (k + 1)]) {
                    count++;
                }
            }
            if (count > productString.length / 2) {
                palindromes.push(productString);
            }
        }
    }
    // console.log(palindromes);

    // What is the largest palindromic number?
    let largestProduct = 0;
    for (let i = 0; i < palindromes.length; i++) {
        if (parseInt(palindromes[i]) > largestProduct) {
            largestProduct = parseInt(palindromes[i]);
        }
    }

    return largestProduct;
}
  
console.log(largestPalindromeProduct(3));