// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var numbers_array = [2, 2, 3, 5, 6, 8, 9, 10];
var even_sum = 0;
for (var index = 0; index < numbers_array.length; index++) {
    if (numbers_array[index] % 2 == 0) {
        even_sum += numbers_array[index];
    }
}
console.log('Sum of Evin Numbers is', even_sum);
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
for (var index = 0; index < numbers_array.length; index++) {
    if (numbers_array[index] % 2 != 0) {
        numbers_array.splice(index, 1);
        --index;
    }
}
console.log("All Evin number", numbers_array);
// Implement a program that uses a loop to iterate through an array of numbers and 
// remove all the even numbers from them and just leave the odd ones
var numbers = [2, 2, 3, 5, 6, 8, 9, 10];
for (var index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 0) {
        numbers.splice(index, 1);
        --index;
    }
}
console.log("All old number", numbers);
