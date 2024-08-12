/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

class GymBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    bottleHole,
    detachableStraps
  ) {
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.bottleHole = bottleHole;
    this.detachableStraps = detachableStraps;
  }
  toggleBottleHole(holeStatus) {
    this.bottleHole = holeStatus;
  }
  toggleStraps(strapType) {
    this.detachableStraps = strapType;
  }
}

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydraPack,
    pickHolster,
    gunHarnes
  ) {
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.hydraPack = hydraPack;
    this.pickHolster = pickHolster;
    this.gunHarnes = gunHarnes;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft + 3;
    this.strapLength.right = lengthRight - 1;
  }
}

export { Backpack, GymBackpack, HikingBackpack };
