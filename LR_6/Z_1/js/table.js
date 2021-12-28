export class Table{
    k = 0.24;

    constructor(name, square){
        this.name = name;
        this.square = square;
    }

    getPrice(){
        return ((this.square ** 2 / 3) * this.k).toFixed(2);
    }

    toString(){
        return `Стол ${this.name}, площадь: ${this.square}, стоимость: ${this.getPrice()}`;
    }
}