class Semicircle {
  constructor(r) {
    if (!r || r <= 0) throw new Error("Неверно задан радиус");
    this._r = r;
  }

  getSq() {
    return (Math.PI * this._r ** 2) / 2;
  }

  getLineLength() {
    return Math.PI * this._r;
  }

  checkPoint(x, y) {
    if (!x || !y) throw new Error("Неверные координаты точки");
    return x ** 2 + y ** 2 < this._r && x > 0;
  }
}

try {
  const r = +prompt("Введите радиус окружности: ");

  const semicircle1 = new Semicircle(r);
  console.log(`Площадь: ${semicircle1.getSq().toFixed(2)}`);
  console.log(`Длина окружности: ${semicircle1.getLineLength().toFixed(2)}`);

  const x = +prompt("Введите x для точки: ");
  const y = +prompt("Введите y для точки: ");

  if (semicircle1.checkPoint(x, y)) {
    console.log("Точка принадлежит окружности");
  } else {
    console.log("Точка не принадлежит окружности");
  }
} catch (err) {
  console.log(err.message);
}
