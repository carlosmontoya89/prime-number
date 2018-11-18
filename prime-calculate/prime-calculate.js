//program to print all primes smaller than or equal to 
// n using Sieve of Eratosthenes 


// Create a boolean array "arrayNumbers[0..n]" and initialize 
// all entries in it as true. A value in arrayNumbers[i] will 
// finally be false if i is Not a prime, else true. 

let arrayNumbers = [];

const listPrimes = (n) => {
    for (var i = 1; i < n; i++) {
        arrayNumbers[i] = true;
    }

    for (var p = 2; p < p * p; p++) {

        // If arrayNumber[p] is not changed, then it is a prime 

        if (arrayNumbers[p] == true) {

            // Update all multiples of p 

            for (var i = p * 2; i <= n; i += p) {
                arrayNumbers[i] = false;
            }
        }
        return arrayNumbers;
    }




}



module.exports = {
    listPrimes
}