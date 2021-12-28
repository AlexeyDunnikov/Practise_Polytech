export class Vector {
  vector = [];
  constructor(...args) {
    args.forEach((a) => {
      this.vector.push(a);
    });
  }

  getLength() {
    const summ = this.vector.reduce((acc, cur) => {
      return (acc += cur ** 2);
    }, 0);

    return (Math.sqrt(summ)).toFixed(2);
  }

  toString() {
    return this.vector.join(", ");
  }

  static compare(vector1, vector2) {
    return vector1.getLength() > vector2.getLength();
  }
}
