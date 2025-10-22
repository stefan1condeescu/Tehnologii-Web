const sumDivisibleNumbers = (numbers, divisor) => {
    return numbers
    .filter(num => num % divisor === 0)
    .reduce((sum, num) => sum + num, 0)
}

const numbers = [10, 15, 22, 33, 40]
const divisor = 5

const result = sumDivisibleNumbers(numbers, divisor)
console.log("Sum of numbers divisible by", divisor, "is:", result)