let x = 1;
let y = 0; 

const K = +prompt('Введите K: ');

while(true){
  let tempX = x;
  x += 2 * y;
  y = y - 2 * tempX;

  if (x > K || y > K) break;
}

console.log(`x = ${x}, y = ${y}`);