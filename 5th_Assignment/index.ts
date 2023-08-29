// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var numbers_array:number[] = [2,2,3,5,6,8,9,10];
let even_sum = 0
for (let index = 0; index < numbers_array.length; index++ ){
    if (numbers_array[index]%2==0){
         even_sum += numbers_array[index];
    }

}
console.log('Sum of Evin Numbers is',even_sum);

// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.


for (let index=0; index<numbers_array.length; index++){
    if (numbers_array[index]%2 != 0){
        numbers_array.splice(index,1)
        --index
    }
}
console.log("All Evin number",numbers_array);

// Implement a program that uses a loop to iterate through an array of numbers and 
// remove all the even numbers from them and just leave the odd ones

var numbers:number[] = [2,2,3,5,6,8,9,10];

for (let index=0; index<numbers.length; index++){
    if (numbers[index]%2 == 0){
        numbers.splice(index,1)
        --index
    }
}
console.log("All old number",numbers);

// Write a program that defines a function to calculate the area of a circle. 
// The function should take the radius as input and return the calculated area.

function calculate_area (radius:number):number{
    let area:number = 3.14159*(radius*radius);
    return area;
}

let area_of_circal:number=calculate_area(5);
console.log(area_of_circal);

// Develop a program that reads a list of grades and uses the splice method 
// to remove failing grades (below 50) from the array.

let Student_gardes:number[] = [45 ,30,40,50,65,80,89,98];
for(let index=0; index<Student_gardes.length; index++){
    if (Student_gardes[index]<50){
        Student_gardes.splice(index,1);
        index--;
    }
    
}
console.log(Student_gardes);

// Write a program that uses a function to find the largest element in an array of numbers.

var Array_of_numbers:number[] = [56,50,70,90,100,500,400,300];

function largest_number (numbers:number[]){
    let largest:number=0;
    for(let index=0; index<numbers.length; index++){
        if (numbers[index]>largest){
            largest = numbers[index];
        }
    }
    return largest;
}

let largest_num = largest_number(Array_of_numbers);
console.log("The Largest number of Array",largest_num);