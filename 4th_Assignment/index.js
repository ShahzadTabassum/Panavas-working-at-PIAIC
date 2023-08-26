// - Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.
function Take_array(Rec_parameters) {
    Rec_parameters.splice(1, 0, "Imran");
    return Rec_parameters;
}
var Picker = Take_array(["Ali", "Ahmad", "Zeeshan"]);
console.log(Picker);
// Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items, and update quantities using the splice method. 
// Print the cart's contents after each operation
var cart = ["Pant", "Shirt", "Vest"];
console.log(cart);
function cart1(Add_items) {
    Add_items.splice(0, 0, "Belt", "Boxer");
    return Add_items;
}
var Added_items = cart1(cart);
console.log(Added_items);
function cart2(remove_items) {
    remove_items.splice(1, 1);
    return remove_items;
}
var removed_items = cart2(Added_items);
console.log(removed_items);
function quantities(Add_quantity) {
    Add_quantity.splice(1, 0, "Qty.1");
    Add_quantity.splice(3, 0, "Qty.2");
    Add_quantity.splice(5, 0, "Qty.2");
    Add_quantity.splice(7, 0, "Qty.3");
    return Add_quantity;
}
var update_Qty = quantities(removed_items);
console.log(update_Qty);
// Write a program that uses a while loop to print the first 25 integers.
var number = 0;
while (number < 25) {
    number++;
    console.log(number);
}
// Write a program that uses a while loop to print the first 10 even numbers.
console.log("Print the first 10 even numbers");
var first_number = 0;
while (first_number <= 10) {
    first_number++;
    if (first_number % 2 == 0) {
        console.log(first_number);
    }
}
// Create a function that takes a positive integer as parameter and uses a 
// while loop to calculate and return the factorial of that number.
console.log("The factorial of that number");
function calculate_factorial(number) {
    // var integer:number[] = [];
    var factorial = 1;
    while (number > 0) {
        factorial *= number;
        // integer.push(number);
        number--;
    }
    return factorial;
    // let product = 1;
    // for (const element of integer) {
    //     product *= element;
    // }
    // return product;
    // return integer.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}
var result = calculate_factorial(7);
console.log(result);
// - Write a program having an array of numbers if the number is negative 
// it should remove the negative number from the array.
function removeNegativeNumbers(numbers) {
    return numbers.filter(function (number) { return number >= 0; });
}
var numberArray = [2, -5, 10, -3, 0, 8, -1];
var positiveNumbers = removeNegativeNumbers(numberArray);
console.log("Original Array:", numberArray);
console.log("Array without Negative Numbers:", positiveNumbers);
// Create a function that takes an array of numbers as parameter. 
// Use a while loop to calculate and return the sum of all the numbers in the array.
function Sum_of_Array(Take_array) {
    var index = 0;
    var array_sum = 0;
    while (index < Take_array.length) {
        array_sum += Take_array[index];
        index++;
    }
    return array_sum;
}
var Total_sum = Sum_of_Array([1, 2, 3, 4, 5]);
console.log("Total sum of array", Total_sum);
