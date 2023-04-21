
 //You manage a grocery store and need to keep track of the inventory of various items.
 // You will use arrays to store the data and various functions to manipulate and analyze the data.
//Create an array containing the names of all items in the inventory.
//Create a separate array with the corresponding stock quantities of each item.
//Write a function to add a new item to the inventory, updating both arrays.
//Write a function to update the stock quantity of an existing item.
//Write a function to calculate the total number of items in the inventory.
//Write a function to find the item with the lowest stock quantity. 


// create arrays of items and stock quantities
let items = ['apples', 'bananas', 'oranges', 'bread', 'milk', 'eggs'];
let quantities = [100, 200, 250, 200, 150, 100];

// function to add new item to inventory
function addItem(name, quantity) {
  items.push(name);
  quantities.push(quantity);
}

// function to update stock quantity of an existing item
function updateQuantity(name, quantity) {
  let index = items.indexOf(name);
  if (index !== -1) {
    quantities[index] = quantity;
  }
}

// function to calculate total number of items in inventory
function totalQuantity() {
  let total = 0;
  for (let i = 0; i < quantities.length; i++) {
    total += quantities[i];
  }
  return total;
}

// function to find item with lowest stock quantity
function lowestQuantity() {
  let lowest = quantities[0];
  let lowestIndex = 0;
  for (let i = 1; i < quantities.length; i++) {
    if (quantities[i] < lowest) {
      lowest = quantities[i];
      lowestIndex = i;
    }
}}

