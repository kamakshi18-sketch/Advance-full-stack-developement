function shoppingCart() {
  let items = [];

  return {
    addItem(item) {
      items.push(item);
    },

    removeItem(item) {
      items = items.filter(i => i !== item);
    },

    showItems() {
      return items;
    }
  };
}

const cart = shoppingCart();

cart.addItem("Laptop");
cart.addItem("Mouse");
cart.removeItem("Mouse");

console.log(cart.showItems());