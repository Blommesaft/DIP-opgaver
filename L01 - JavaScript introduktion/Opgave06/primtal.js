const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Giv et heltal ', (input) => { 
    const number = Number(input);
    

let primeList = [];

for (let i = 0; i <= number; i++) {
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        primeList.push(i);
    }
}

console.log(primeList)
rl.close();
});