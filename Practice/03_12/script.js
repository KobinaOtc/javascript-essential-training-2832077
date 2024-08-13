/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import { GymBackpack, HikingBackpack } from "./Backpack.js";

const spalden = new GymBackpack(
  "Spalden",
  12,
  "sky blue",
  4,
  16,
  16,
  false,
  true,
  "magnetic"
);

const northForest = new HikingBackpack(
  "North Forest",
  30,
  "Purple",
  14,
  25,
  21,
  false,
  "full",
  "empty",
  "Glock 17"
);

console.log(northForest);
northForest.newStrapLength(30, 30);

console.log("edited bag:", northForest);
console.log("This is Spalden:", spalden);
