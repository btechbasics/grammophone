import exampleFixtures from "../fixtures/example_grammars.js";
import Grammar from "../../src/grammar/index.js";

const queueDepthFixtures = {
  "a": [
    [ 'a1', 'x' ],
    [ 'a1', 'a2', 'x', 'a2' ],
    [ 'a2', 'a3', 'x', 'a3' ],
    [ 'a3', 'a4', 'x', 'a4' ],
    [ 'a4', 'a5', 'x', 'a5' ],
    [ 'a5', 'a1', 'x', 'a1' ]
  ],

  "b": [
    [ 'A', 'A', 'B' ],
    [ 'A', 'B' ],
    [ 'B', 'A' ],
    [ 'B', 'x' ]
  ],

  "c": [
    [ "S", "(", "S", ")", "S'" ],
    [ "S", "Int", "S'" ],
    [ "S'", "+", "S", "S" ],
    [ "S'", "*", "S", "S" ],
    [ "S'" ],
    [ "Int", "0" ],
    [ "Int", "1" ]
  ]
};

function check(name, productions) {
  it(name, function() {
    let grammar = new Grammar(productions);
    grammar.calculate("grammar.sentences");
  });
}

describe("grammar.sentences", function() {
  for (let k in queueDepthFixtures) {
    check(k, queueDepthFixtures[k]);
  }

  for (let k in exampleFixtures) {
    check(k, exampleFixtures[k]);
  }
});
