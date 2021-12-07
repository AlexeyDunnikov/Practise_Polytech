//c - сантимеры
//i - дюймы
//f - футы

const translate = {
  c: {
    i: 0.3937,
    f: 0.03281,
    toString() {
      return "Сантиметры";
    },
  },
  i: {
    c: 2.54,
    f: 0.08333,
    toString() {
      return "Дюймы";
    },
  },
  f: {
    c: 30.48,
    i: 12,
    toString() {
      return "Футы";
    },
  },
};

const str = prompt("Введите число (153f)");

try{
    const num = parseInt(str);
    const ch = str[str.length - 1];

    console.log(`Исходное значение: ${translate[ch].toString()} = ${num}`)

    if (!(ch in translate)) {
       throw new Error('Такой единицы измерения не существует'); 
    }

    for (let [key, value] of Object.entries(translate[ch])){
        console.log(
          `${translate[key].toString()} = ${(value * num).toFixed(2)}`
        );
    }
}
catch(err){
    console.log(err.message);
}

