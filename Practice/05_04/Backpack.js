class Backpack {
  constructor(
    name,
    volume,
    color,
    age,
    pocketNum,
    strapLenL,
    strapLenR,
    lidStatus
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.age = age;
    this.pocketNum = pocketNum;
    this.strapLen = {
      left: strapLenL,
      right: strapLenR,
    };
    this.lidStatus = lidStatus;
  }

  toggleLid() {
    if (this.lidStatus == true) {
      return this.lidStatus == false;
    } else {
      return this.lidStatus == true;
    }
  }
}

export default Backpack;
