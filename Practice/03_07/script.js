/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const wallet = {
  size: 20,
  color: "black",
  texture: "rough",
  isopen: false,
  card: {
    cardType: "credit",
    color: "Grey",
    bank: "Stanbic Bank",
  },
  openWallet: function (openOrClose) {
    this.isopen = openOrClose;
  },
};

console.log("This is the object called wallet:", wallet);
