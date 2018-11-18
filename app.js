const prime = require('./prime-calculate/prime-calculate')

let primeNumbers = prime.listPrimes(100);
for (i = 2; i <= primeNumbers.length; i++) {
    if (primeNumbers[i] == true) {
        console.log(i + " ");

    }

}