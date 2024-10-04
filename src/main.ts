const numbers: number[] = [1, 2, 3, 4];
console.log("Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.");
console.log(numbers.map((num: number) => num * 2));
const words: string[] = ['one', 'two', 'three'];
console.log("Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 3 letters.");
console.log(words.filter((word: string) => word.length > 3));
console.log("Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.");
console.log(numbers.reduce((acc: number, value: number) => acc + value));
console.log("Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.");
console.log(numbers.some((value: number) => 10 < value));


const mixNumbers: number[] = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

console.log("Sort these numbers in descending order.");
const sortedNumbers = mixNumbers.sort((a: number, b: number) => b - a);
console.log(sortedNumbers);

console.log("Square these numbers.");
const squaredNumbers = sortedNumbers.map((n: number) => n * n);
console.log(squaredNumbers);

console.log(" Remove the lowest two numbers and the highest 4 numbers from the list");
const slicedNumbers = squaredNumbers.slice(4, squaredNumbers.length - 2);
console.log(slicedNumbers);

console.log("Remove all numbers that are divisible by 4.");
const filteredNumbers = slicedNumbers.filter((n: number) => n % 4);
console.log(filteredNumbers);

console.log("Add up all the numbers.");
const calculatedNumbers = filteredNumbers.reduce((acc:number, n:number) => acc + n, 0);
console.log(calculatedNumbers);













