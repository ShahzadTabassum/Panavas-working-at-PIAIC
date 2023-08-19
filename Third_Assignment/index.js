// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function CtoF_Temperature(Celsius_temp) {
    var fahrenheit_temp = (Celsius_temp * 9 / 5) + 32;
    console.log("Temperature in Fahrenheit is", fahrenheit_temp);
}
function FtoC_Temperature(Fahrenheit_temp) {
    var Celsius_temp = (Fahrenheit_temp - 32) * 5 / 9;
    console.log("Temperature in Celsius is", Celsius_temp);
}
CtoF_Temperature(32);
FtoC_Temperature(80);
// Write a program that calculates the percentage.
function percentage(Obtaining_marks, Total_marks) {
    var percentage = (Obtaining_marks / Total_marks) * 100;
    console.log("Your Percentage", percentage);
}
percentage(721, 1100);
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function convert_weaks_and_days(days) {
    var Weaks = Math.floor(days / 7);
    var day = days % 7;
    console.log("Number of Weaks", Weaks, "And Days", day);
}
convert_weaks_and_days(29);
// Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price = 150;
if (price >= 100) {
    var DPrice = (price / 100) * 90;
    console.log(DPrice);
}
else {
    DPrice = (price / 100) * 95;
    console.log(DPrice);
}
// Create a program that determines the category of a user-provided age. 
// If the age is between 0 and 12, print "Child." 
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult.
var Age = 16;
if (Age <= 12) {
    console.log("You are Child");
}
else if (Age >= 13 && Age <= 19) {
    console.log("You are Teenager");
}
else {
    console.log("You are Adult");
}
// Develop a program that determines the day of the week. 
// Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var number = 9;
if (number == 1) {
    console.log("Today is Sunday");
}
else if (number == 2) {
    console.log("Today is Monday");
}
else if (number == 3) {
    console.log("Today is Tusday");
}
else if (number == 4) {
    console.log("Today is Wensday");
}
else if (number == 5) {
    console.log("Today is Thursday");
}
else if (number == 6) {
    console.log("Today is Friday");
}
else if (number == 7) {
    console.log("Today is Saturday");
}
else {
    console.log("You put wrong number becuse a week have 7 days");
}
// -Write a program that takes the number of units consumed by a user 
// if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to 
// if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
var consumed_units_user = 100;
var per_unit_price = 5;
var Total_Unit_Amount = consumed_units_user * per_unit_price;
var Tax_Add_Bill;
if (consumed_units_user < 100) {
    console.log("Your Bill Amount", Total_Unit_Amount);
}
else if (consumed_units_user > 100 && consumed_units_user <= 200) {
    Tax_Add_Bill = (Total_Unit_Amount / 100) * 110;
    console.log("Your Bill Amount with 10% Tax", Tax_Add_Bill);
}
else if (consumed_units_user > 200 && consumed_units_user <= 500) {
    Tax_Add_Bill = (Total_Unit_Amount / 100) * 115;
    console.log("Your Bill Amount with 15% Tax", Tax_Add_Bill);
}
else {
    Tax_Add_Bill = (Total_Unit_Amount / 100) * 125;
    console.log("Your Bill Amount with 25% Tax", Tax_Add_Bill);
}
// Write a program that checks if the given year is leap year or not.
var year = 2027;
if (year % 4 == 0) {
    console.log("This year is Leap Year");
}
else {
    console.log("This year is not Leap Year");
}
// Write a program that checks if the given number is  divisible 
// by 3 or 5 or both or not divisible by anyone show output accordingly.
var given_number = 9;
if (given_number % 3 == 0 || given_number % 5 == 0) {
    console.log("This number is  divisible by 3 or 5");
}
else {
    console.log("This number is Not divisible by 3 or 5");
}
