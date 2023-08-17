// Exercise 1:  Write a program that calculates the area of a rectangle.

var weight_rec = 8;
var hight_rec = 4;
var area_rec = weight_rec*hight_rec;
console.log("Area of rectangle",area_rec);
// Exercise 2: Write a program that takes input and calculates the volume of a cube.

var thinkness = 6;

var volume = weight_rec*hight_rec*thinkness;
console.log("Volume of cube",volume);

// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

var number = 6;

if (number<0){
    console.log("Negative");
}
else if (number==0){
    console.log("Zero");
}
else{
    console.log("Positive");
}

// Exercise 4:   Write a program that checks if a given number is even or odd.

if (number % 2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}

// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

var age = 24;

if (age> 18){
    console.log("You are Eligible for vote");
}
else{
    console.log("You are not Eligible for vote");
}

// Exercise 6:  Write a program that calculates the result of a mathematical expression.
// 	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

var solve = (((10 + 5) * 3 - 2) / (4 % 3)  - 7);
console.log(solve);