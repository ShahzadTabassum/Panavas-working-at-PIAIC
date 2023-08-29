// Write a program that uses filter to remove all negative numbers from an array of numbers
var numbers = [2, -1, 7, 10, -27, -25, 0, 70, -99, 100];
var positive_number = numbers.filter(function (data) {
    if (data >= 0) {
        return true;
    }
});
console.log("All Positive Numbers", positive_number);
// Given an array of numbers [1, 2, 3, 4, 5], 
// use the map method to create a new array where each number is multiplied by 2.
var arr_num = [1, 2, 3, 4, 5];
var multiplied_num = arr_num.map(function (num) { return num * 2; });
console.log("Multipal of Two", multiplied_num);
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
// use the filter method to create a new array containing only the fruits with more than 5 characters.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var fruit_5char = fruits.filter(function (fruit) {
    if (fruit.length >= 5) {
        return true;
    }
});
console.log(fruit_5char);
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and 
// filter methods together to create a new array containing the squares of even numbers.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var even_num = num.filter(function (number) {
    if (number % 2 == 0) {
        return true;
    }
});
var squares_even = even_num.map(function (number) { return number * number; });
console.log("Square of Even", squares_even);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each 
// temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var Celsius = [0, 10, 20, 30, 40];
var temp_Fahrenheit = Celsius.map(function (C) { return (C * 9 / 5) + 32; });
console.log("Tempratur in Fahrenheit ".concat(temp_Fahrenheit));
// Given an array of numbers [3, 6, 9, 12, 15, 18], 
// use the map and filter methods together to create a new array containing the doubled values of odd numbers.
var Num_data = [3, 6, 9, 12, 15, 18];
var doubledOddValues = Num_data
    .filter(function (num) { return num % 2 !== 0; })
    .map(function (oddNum) { return oddNum * 2; });
console.log("Doubled values of odd numbers:", doubledOddValues);
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], 
// use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(function (data) {
    console.log("".concat(data, "!"));
});
