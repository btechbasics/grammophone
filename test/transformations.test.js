const Grammar = require("../src/grammar");

describe("transformations.epsilonSeparate", function() {
  it("returns the expected result", function() {
    let spec = `
    A -> a .
    A -> .
    `;

    let grammar = Grammar.parse(spec).grammar;
    expect(grammar.calculate("transformations.epsilonSeparate")).toEqual([
      {
        name: "epsilonSeparate",
        production: 0,
        symbol: 0,
        changes: [
          {
            operation: "delete",
            index: 0
          },
          {
            operation: "delete",
            index: 0
          },
          {
            operation: "insert",
            index: 0,
            production: ["A", "A*"],
          },
          {
            operation: "insert",
            index: 1,
            production: ["A"],
          },
          {
            operation: "insert",
            index: 2,
            production: ["A*", "a"],
          }
        ]
      }
    ]);
  });

  it("result is empty when a nonterminal only produces epsilon", function() {
    let spec = `
    A -> .
    `;

    let grammar = Grammar.parse(spec).grammar;
    expect(grammar.calculate("transformations.epsilonSeparate")).toEqual([]);
  });
});
