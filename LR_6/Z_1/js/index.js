import { WritingTable } from "./Writing_table.js";
import { Table } from "./Table.js";

const table = new Table('Брауни', 250);
const writingTable = new WritingTable('Альфа', 400, 'дерево');

console.log(table.toString());
console.log(writingTable.toString());

