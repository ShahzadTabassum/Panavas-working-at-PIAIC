// - Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.
function Take_array(Rec_parameters) {
    Rec_parameters.splice(1, 0, "Imran");
    return Rec_parameters;
}
var Picker = Take_array(["Ali", "Ahmad", "Zeeshan"]);
console.log(Picker);
