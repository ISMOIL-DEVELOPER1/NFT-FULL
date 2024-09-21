// 1

function isComposite(num) {
  if (num < 4) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return false;
}

const compositeNumbers = [];
for (let i = 1; i <= 50; i++) {
  if (isComposite(i)) {
    compositeNumbers.push(i);
  }
}

console.log(compositeNumbers);

// 2

let num = 1122334;

function sumOfUniqueDigits(number) {
  const digitCount = {};
  const digits = String(number).split("");

  digits.forEach((digit) => {
    digitCount[digit] = (digitCount[digit] || 0) + 1;
  });

  let sum = 0;
  for (const digit in digitCount) {
    if (digitCount[digit] > 1) {
      sum += Number(digit);
    }
  }

  return sum;
}

const result = sumOfUniqueDigits(num);
console.log(result);

// 3

let n = 8;

function printOddNumbersLessThanN(n) {
  for (let i = n - 1; i >= 1; i--) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

printOddNumbersLessThanN(n);

// 5

let numm = 123;

function reverseDigits(number) {
  return String(number).split("").reverse().join("");
}

const reversed = reverseDigits(numm);
console.log(reversed);
