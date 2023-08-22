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
