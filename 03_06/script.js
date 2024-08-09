/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The backpack's colour:", backpack.color);
console.log("This is the left straplength:", backpack.strapLength.left);

console.log("This is Bracket notation at work:", backpack["lidOpen"]);

var query = "volume";
console.log("This is using backet notation with a query:", backpack[query]);
