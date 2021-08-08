var Relation = require('../../../relation');
var END = require("../../symbols").END;

module.exports = function(grammar) {

  var immediate, propagation, result;
  var i, j, k, s;
  var first = grammar.calculate("grammar.first");
  var nullable = grammar.calculate("grammar.nullable");
  var nonterminals = grammar.calculate("grammar.nonterminals");
  var start = grammar.calculate("grammar.start");

  immediate = Relation.create();
  propagation = Relation.create();

  // Add the end of input symbol to the immediate follow set of the grammar's start symbol.

  Relation.add(immediate, start, END);

  // Given a production X -> ... A β, follow(A) includes first(β), except for the empty string.

  for (i = 0; i < grammar.productions.length; i++) {

    for (j = 1; j < grammar.productions[i].length - 1; j++) {

      // If the symbol is a nonterminal...

      if (nonterminals[grammar.productions[i][j]]) {

        // Add the first set of the remaining symbols to the follow set of the symbol

        for (k = j + 1; k < grammar.productions[i].length; k++) {

          // If this symbol is a terminal, add it, and then stop adding.

          if (!nonterminals[grammar.productions[i][k]]) {
            Relation.add(immediate, grammar.productions[i][j], grammar.productions[i][k]);
            break;
          }

          // If it is a nonterminal, add the first set of that nonterminal.

          for (s in first[grammar.productions[i][k]]) {
            Relation.add(immediate, grammar.productions[i][j], s);
          }

          // Stop if it isn't nullable.

          if (!nullable[grammar.productions[i][k]]) {
            break;
          }

        }

      }

    }

  }

  // Given a production B -> ... A β where β is nullable or is the empty string, follow(A) includes follow(B)

  for (i = 0; i < grammar.productions.length; i++) {

    // Scan from the end of the right side of the production to the beginning...

    for (j = grammar.productions[i].length - 1; j > 0; j--) {

      // If the symbol is a nonterminal, add the left side.

      if (nonterminals[grammar.productions[i][j]]) {
        Relation.add(propagation, grammar.productions[i][j], grammar.productions[i][0]);
      }

      // If it isn't nullable, stop.

      if (!nullable[grammar.productions[i][j]]) {
        break;
      }

    }

  }

  // Propagate the relation

  result = Relation.propagate(immediate, propagation);

  // Ensure that all nonterminals are present as keys, even if that particular follow set is empty.

  for (k in nonterminals) {
    if (typeof result[k] === "undefined") {
      result[k] = {};
    }
  }

  return result;

};