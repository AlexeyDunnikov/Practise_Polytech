class Matrice {
  constructor(size = 3) {
    this._size = size;
    this._fillMatrice();
  }

  getArray() {
    return this._arr;
  }

  getNum(i, j) {
    return this._arr[i][j];
  }

  setNum(i, j, num) {
    this._arr[i][j] = num;
  }

  showArr() {
    const table = document.createElement("table");
    for (let i = 0; i < this._size; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < this._size; j++) {
        const cell = document.createElement("td");
        cell.innerHTML = this._arr[i][j];
        row.append(cell);
      }
      table.append(row);
    }

    document.querySelector('.main').append(table);
  }

  _fillMatrice() {
    this._arr = [];
    for (let i = 0; i < this._size; i++) {
      const subArr = [];
      for (let j = 0; j < this._size; j++) {
        subArr.push(this._getRandomNum(0, 10));
      }
      this._arr.push(subArr);
    }
  }

  _getRandomNum(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
}

const matr = new Matrice(5);
matr.showArr();

matr.setNum(0, 0, 10);
console.log(
  `После замены элемента [0,0] на 10: элемент [0,0] равен ${matr.getNum(0, 0)}`
);

matr.showArr();
