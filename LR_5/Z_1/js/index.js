import { Vector } from "./vector.js";

const vector1 = new Vector(3, -4);
const vector2 = new Vector(7, 7);

if (Vector.compare(vector1, vector2)) {
  console.log(`Вектор ${vector1.toString()} длиннее`);
} else {
  console.log(`Вектор ${vector2.toString()} длиннее`);
}
