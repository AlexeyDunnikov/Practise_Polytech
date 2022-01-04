import { Clothes } from "./clothes.js";

export class Coat extends Clothes {
  constructor(name, v) {
    super(name);
    this.v = v;
  }

  getClothConsumption() {
    return (this.v / 6.5 + 0.5).toFixed(2);
  }

  toString(){
      return `Пальто: ${this.name}, размер: ${this.v}, расход ткани: ${this.getClothConsumption()}`;
  }
}
