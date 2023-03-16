

// What is the initial item?

export function initial() {

  // production is an index into the grammar's list of productions,
  // index is the distinguished position in that production,
  // -1 is the production added by augmenting the grammar.

  return [ { production: -1, index: 0 } ];

}

// Given an item's kernel, find its epsilon closure of items.

export function closure({ productions, start }, kernel) {

  var i, j;
  var item, symbol;

  // Which items were added?

  var added;

  // Which productions have been used?

  var used = new Set();

  // Copy the kernel as the initial list of items

  var result = [];

  for (i = 0; i < kernel.length; i++) {
    result.push({ production: kernel[i].production, index: kernel[i].index });
  }

  // While we cannot add more items...

  do {

    added = [];

    // For each item we have...

    for (i = 0; i < result.length; i++) {

      // Find the nonterminal symbol...

      item = result[i];

      // If the production is the augmented start production, we're looking
      // for the original start symbol. Otherwise, use the grammar's productions
      // to find the symbol, but add one to account for the left-hand side of
      // the production.

      if (item.production === -1) {
        symbol = [start][item.index];
      } else {
        symbol = productions[item.production][item.index + 1];
      }

      // Find unused matching productions and add them.

      for (j = 0; j < productions.length; j++) {

        if (!used.has(j) && productions[j][0] == symbol) {
          added.push({ production: j, index: 0 });
          used.add(j);
        }

      }

    }

    for (i = 0; i < added.length; i++) {
      result.push(added[i]);
    }

  } while (added.length > 0);

  return result;

}

// For the given list of (closure) items, return a map from symbol to kernel
// representing the transitions that can be taken out of the
// corresponding state.

export function transitions({ productions, start }, closure) {

  var result = {};
  var i;
  var item, symbol;

  // For each item...

  for (i = 0; i < closure.length; i++) {

    item = closure[i];

    // Calculate the leaving symbol by looking in the grammar's productions,
    // handling the augmented grammar production as above.

    if (item.production === -1) {
      symbol = [start][item.index];
    } else {
      symbol = productions[item.production][item.index + 1];
    }

    // If there is a leaving symbol, add the next item.

    if (typeof symbol != "undefined") {

      if (!result[symbol]) {
        result[symbol] = [];
      }

      result[symbol].push({ production: item.production, index: item.index + 1 });

    }

  }

  return result;

}

// Are the two kernels equal?

export function same(a, b) {

  var i, j;

  if (a.length !== b.length) {
    return false;
  }

  for (i = 0; i < a.length; i++) {

    for (j = 0; j < b.length; j++) {

      if (a[i].production === b[j].production && a[i].index === b[j].index) {
        break;
      }

    }

    if (j === b.length) {
      return false;
    }

  }

  return true;

}
