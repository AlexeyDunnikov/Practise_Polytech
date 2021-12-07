const x = +prompt("Введите X: ");
const y = +prompt("Введите Y: ");
const z = +prompt("Введите Z: ");

const a = 0;
if (2 + Math.abs(x - 1 + x**2 * y**2) <= 0){
    alert('Деление на ноль');
}
else{
    a = (4 + Math.sin(x + y)) / (2 + Math.abs(x - 1 + x**2 * y**2));
}
const b = (Math.cos(Math.tan(z)));

console.log(`a = ${a.toFixed(2)}`);
console.log(`b = ${b.toFixed(2)}`);