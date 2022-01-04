import { Table } from "./Table.js";

export class WritingTable extends Table{
    finishingPrice = 0;
    constructor(name, square, material){
        super(name, square);
        this.material = material;
        this.computeFinishingPrice();
    }

    computeFinishingPrice(){
        this.finishingPrice = +this.getPrice() * 0.1;
    }

    getFinishingPrice(){
        return this.finishingPrice;
    }

    getTotalPrice(){
        return +this.getFinishingPrice() + +this.getPrice();
    }

    toString(){
        return `Письменный стол ${this.name}, площадь: ${this.square}, материал: ${this.material}, стоимость отделки: ${this.getFinishingPrice()}, итоговая стоимость: ${this.getTotalPrice()}`;
    }
}