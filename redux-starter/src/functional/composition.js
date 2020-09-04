import { compose, pipe } from 'lodash/fp';
import { toLower, update } from 'lodash';


let input = "     JavaScript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`; //"<div>" + str + "</div>";
const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap2 = type => str => `<${type}>${str}</${type}>`;


const toLowerCase = str => str.toLowerCase();

//const result = wrapInDiv(toLowerCase(trim(input)));
// from right to left
//const transform = compose(wrapInDiv, toLowerCase, trim);
// from left to right
const transform = pipe(trim, toLowerCase, wrap2("span"));

console.log(transform(input)); 