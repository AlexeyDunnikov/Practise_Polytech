import { Clothes } from "./clothes.js";
import { Coat } from "./coat.js";
import { Costume } from "./costume.js";

const arr = [
  new Clothes("розовая байка"),
  new Coat("WILLY", 58),
  new Costume("GALA", 176),
  new Coat("TIME", 62),
  new Costume("MORGAN", 182),
];

arr.forEach((item) => console.log(item.toString()));
