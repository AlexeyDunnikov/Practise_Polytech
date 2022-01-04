import { Clothes } from "./clothes.js";

export class Costume extends Clothes {
  constructor(name, h) {
    super(name);
    this.h = h;
  }

  getClothConsumption() {
    return (2 * this.h + 0.3).toFixed(2);
  }

  toString(){
      return `Костюм: ${this.name}, рост: ${this.р}, расход ткани: ${this.getClothConsumption()}`;
  }
}
