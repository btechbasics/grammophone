export default function(grammar) {

  var i, j, s;

  var terminalOrder = [];
  var nonterminalOrder = [];
  var productionOrder = [];

  var nonterminals = grammar.calculate("grammar.nonterminals");
  var terminals = grammar.calculate("grammar.terminals");

  for (i = 0; i < grammar.productions.length; i++) {

    s = grammar.productions[i][0];

    if (productionOrder.indexOf(s) === -1) {
      productionOrder.push(s);
    }

    for (j = 0; j < grammar.productions[i].length; j++) {

      s = grammar.productions[i][j];

      if (nonterminals.has(s) && nonterminalOrder.indexOf(s) === -1) {
        nonterminalOrder.push(s);
      }

      if (terminals.has(s) && terminalOrder.indexOf(s) === -1) {
        terminalOrder.push(s);
      }

    }

  }

  return {
    terminalOrder: terminalOrder,
    nonterminalOrder: nonterminalOrder,
    productionOrder: productionOrder,

    nonterminals: nonterminals,
    terminals: terminals
  };

}
