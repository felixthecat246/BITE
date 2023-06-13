// Sample menu items with prices
const menu = {
    burger: 10,
    pizza: 12,
    salad: 8,
    soda: 2
  };
  
  // Cart object to store selected items
  const cart = {};
  
  // Function to add items to the cart
  function addToCart(item, quantity) {
    if (menu.hasOwnProperty(item)) {
      if (cart.hasOwnProperty(item)) {
        cart[item] += quantity;
      } else {
        cart[item] = quantity;
      }
      console.log(`${quantity} ${item}(s) added to the cart.`);
    } else {
      console.log(`${item} is not available on the menu.`);
    }
  }
  
  // Function to calculate the total price of the cart
  function calculateTotal() {
    let total = 0;
    for (const item in cart) {
      if (menu.hasOwnProperty(item)) {
        total += menu[item] * cart[item];
      }
    }
    return total;
  }
  
  // Function to process the checkout
  function checkout() {
    const total = calculateTotal();
    console.log(`Total amount: $${total}`);
    // Add code here to process the payment and place the order
    // You can use APIs or perform any other necessary actions
    console.log("Order placed successfully!");
    // Clear the cart after successful checkout
    for (const item in cart) {
      delete cart[item];
    }
  }
  
  // Example usage
  addToCart('burger', 2);
  addToCart('pizza', 1);
  addToCart('salad', 1);
  addToCart('soda', 3);
  
  checkout();
  