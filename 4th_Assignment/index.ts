// - Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.

function Take_array (Rec_parameters:string[]):string[]{
    Rec_parameters.splice(1,0,"Imran");
     return Rec_parameters;

}

let Picker = Take_array(["Ali","Ahmad","Zeeshan"]);
console.log(Picker);

// Implement a simple shopping cart program using an array. 
// Create functions to add items, remove items, and update quantities using the splice method. 
// Print the cart's contents after each operation
 
var cart:string[] = ["Pant","Shirt","Vest"]
console.log(cart);
function cart1 (Add_items:string[]):string[]{
    Add_items.splice(0,0,"Belt","Boxer");
    return Add_items;
}

var Added_items:string[] = cart1(cart);
console.log(Added_items);


function cart2 (remove_items:string[]):string[]{
    remove_items.splice(1,1);
    return remove_items;
}

var removed_items:string[] = cart2(Added_items);
console.log(removed_items);

function quantities (Add_quantity:string[]):string[]{
    Add_quantity.splice(1,0,"Qty.1");
    Add_quantity.splice(3,0,"Qty.2");
    Add_quantity.splice(5,0,"Qty.2");
    Add_quantity.splice(7,0,"Qty.3");
    return Add_quantity;
}

var update_Qty:string[] = quantities(removed_items);
console.log(update_Qty);

// Write a program that uses a while loop to print the first 25 integers.

let number = 0;

while(number<25){
    number++
    console.log(number);
}

// Write a program that uses a while loop to print the first 10 even numbers.
console.log("Print the first 10 even numbers");
let first_number = 0;

while(first_number<=10){
    first_number++;
    if(first_number % 2 == 0){
        console.log(first_number);
    }
}

// Create a function that takes a positive integer as parameter and uses a 
// while loop to calculate and return the factorial of that number.
console.log("The factorial of that number");
function factorial(number:number):number{
    var integer:number[] = [];
    while(number>0){
        integer.push(number);
        number--;
    }
   
    let product = 1;
    for (const element of integer) {
        product *= element;
    }
    return product;
    // return integer.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

var result = factorial(5);
console.log(result);

// - Write a program having an array of numbers if the number is negative 
// it should remove the negative number from the array.


