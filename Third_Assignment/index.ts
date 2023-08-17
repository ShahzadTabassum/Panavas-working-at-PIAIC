// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

function CtoF_Temperature(Celsius_temp:number){
    var fahrenheit_temp = (Celsius_temp*9/5) + 32
    console.log("Temperature in Fahrenheit is",fahrenheit_temp);
}

function FtoC_Temperature(Fahrenheit_temp:number){
    var Celsius_temp = (Fahrenheit_temp - 32) * 5/9; 
    console.log("Temperature in Celsius is",Celsius_temp);
}

CtoF_Temperature(32);
FtoC_Temperature(80);

// Write a program that calculates the percentage.

function percentage (Obtaining_marks:number,Total_marks:number){
    var percentage = (Obtaining_marks/Total_marks)*100;
    console.log("Your Percentage",percentage);
}
percentage(721,1100);

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function convert_weaks_and_days (days:number){
var Weaks = Math.floor(days / 7);
var day = days%7;
console.log("Number of Weaks",Weaks,"And Days",day);
}
convert_weaks_and_days(29);







