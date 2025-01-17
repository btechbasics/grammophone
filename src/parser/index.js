import { parser } from "./rules.js";

export default function(src) {
  let tree = parser.parse(src);
  let cursor = tree.cursor();

  let productions = [];
  let production;
  let head;

  do {
    if (cursor.type.isError) {
      return { error: new Error("Parse error") };
    }

    if (cursor.name === "Head") {
      production = undefined;
    } else if (cursor.name === "Production") {
      production = [head];
      productions.push(production);
    } else if (cursor.name === "Symbol") {
      let symbol = src.slice(cursor.from, cursor.to);

      if (typeof production === "undefined") {
        head = symbol;
      } else {
        production.push(symbol);
      }
    } else if (cursor.name === "QuotedSymbol") {
      let symbol = src.slice(cursor.from + 1, cursor.to - 1);

      if (typeof production === "undefined") {
        head = symbol;
      } else {
        production.push(symbol);
      }
    }
  } while (cursor.next());

  return { productions };
}
