const fs = require('fs');

let arrayNumbers = [];

const listPrimes = (n) => {
    let arrayPrimeNumbers = [];
    for (var i = 1; i < n; i++) {
        arrayNumbers[i] = true;
    }

    for (var p = 2; p < p * p; p++) {

        if (arrayNumbers[p] == true) {

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