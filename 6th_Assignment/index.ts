// Write a program that uses filter to remove all negative numbers from an array of numbers

let numbers:number[] = [2,-1,7,10,-27,-25,0,70,-99,100];

let positive_number:number[] = numbers.filter((data) => {
    if(data>=0){
        return true;
    }
});

console.log("All Positive Numbers",positive_number);

// Given an array of numbers [1, 2, 3, 4, 5], 
// use the map method to create a new array where each number is multiplied by 2.
var arr_num:number[] = [1, 2, 3, 4, 5];
let multiplied_num = arr_num.map((num)=>num*2);
console.log("Multipal of Two",multiplied_num);

// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
// use the filter method to create a new array containing only the fruits with more than 5 characters.

let fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];
let fruit_5char = fruits.filter((fruit)=>{
    if(fruit.length>=5){
        return true;
    }
})
console.log(fruit_5char);

// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and 
// filter methods together to create a new array containing the squares of even numbers.

let num:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even_num = num.filter((number)=>{
    if (number%2==0){
        return true;
    }
});

let squares_even = even_num.map((number)=>number*number)
console.log("Square of Even",squares_even);

// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each 
// temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

let Celsius:number[] = [0, 10, 20, 30, 40];

let temp_Fahrenheit = Celsius.map((C)=>(C * 9/5) + 32);
console.log(`Tempratur in Fahrenheit ${temp_Fahrenheit}`);

// Given an array of numbers [3, 6, 9, 12, 15, 18], 
// use the map and filter methods together to create a new array containing the doubled values of odd numbers.

const Num_data: number[] = [3, 6, 9, 12, 15, 18];

const doubledOddValues: number[] = Num_data
  .filter(num => num % 2 !== 0) 
  .map(oddNum => oddNum * 2);   

console.log("Doubled values of odd numbers:", doubledOddValues);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], 
// use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let names:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((data)=>{
    console.log(`${data}!`);
});

