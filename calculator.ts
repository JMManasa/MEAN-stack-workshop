// Simple Calculator in TypeScript

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        console.error("Error: Division by zero is not allowed.");
        return NaN;  // Returning NaN to indicate error
    }
    return a / b;
}

// Example usage:
let num1: number = 10;
let num2: number = 5;

console.log(`${num1} + ${num2} = ${add(num1, num2)}`); // 10 + 5 = 15
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`); // 10 - 5 = 5
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`); // 10 * 5 = 50
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`); // 10 / 5 = 2
