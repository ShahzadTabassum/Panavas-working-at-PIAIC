//Problem 1-Personal Message: Store a person’s name in a variable, 
//and print a message to that person. Your message should be simple, 
//such as, “Hello Eric, would you like to learn some Python today?”

let Person_name:string = "Imran Ali";
console.log(`"${Person_name}, would you like to learn some Typescript?"`);

//Problem 2-Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, 
//and titlecase.

let Person_name2:string = "Shahzad Tabassum";

console.log(`IN TittleCase 'Mr ${Person_name2}'`);
console.log("IN UPPERCASE", Person_name2.toUpperCase());
console.log("in lowercase", Person_name2.toLowerCase());

//Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author. Your output should look something like the following, 
//including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”


console.log(`Quaid-e-Azam once said, “There are two powers in the world; one is the sword and the other is the pen.”`);

//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Quaid-e-Azam";
let compose = famous_person.concat(" once said, “There are two powers in the world; one is the sword and the other is the pen.”");
console.log(compose);

// Stripping Names: Store a person’s name, 
// and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

let Person_name3 =  '\t\tS\tH\tA\tH\tZ\tA\tD\n';
console.log(Person_name3);
console.log(Person_name3.trim());

// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the results.


let result_addition = 5 + 3;
console.log("Addition: 5 + 3 =", result_addition);

let result_subtraction = 10 - 2;
console.log("Subtraction: 10 - 2 =", result_subtraction)

let result_multiplication = 4 * 2;
console.log("Multiplication: 4 * 2 =", result_multiplication);

let result_division = 16 / 2;
console.log("Division: 16 / 2 =", result_division);
 
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.


console.log(5 + 3);
console.log(10 - 2);
console.log (4 * 2);
console.log (16/2);

// Favorite Number: Store your favorite number in a variable. Then, using that variable, 
// create a message that reveals your favorite number. Print that message.

let favorite_num:number = 9;
console.log(`My favorite number is ${favorite_num}`);



