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
