import { fillArray, formatSymbol, formatProduction } from "../../helpers.js";
import { END } from "../../../grammar/symbols.js";

export default function({ grammar, table }) {
  const { productions, symbolInfo } = grammar.calculations;

  return (
    <table className="symbols lr1-table">
      <colgroup>
        <col />
      </colgroup>
      <colgroup className="t">
        {fillArray(symbolInfo.terminals.size + 1, (index) => <col key={index} />)}
      </colgroup>
      <colgroup className="nt">
        {fillArray(symbolInfo.nonterminals.size, (index) => <col key={index} />)}
      </colgroup>

      <thead>
        <tr>
          <th>State</th>
          {
            symbolInfo.terminalOrder.map(function(symbol, index) {
              return <th key={"t"+index}>{formatSymbol(symbol, symbolInfo)}</th>;
            })
          }
          <th>{formatSymbol(END, symbolInfo)}</th>
          {
            symbolInfo.nonterminalOrder.map(function(symbol, index) {
              return <th key={"nt"+index}>{formatSymbol(symbol, symbolInfo)}</th>;
            })
          }
        </tr>
      </thead>

      <tbody>
        {
          table.map(function(state, index) {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                {
                  symbolInfo.terminalOrder.concat(END).map(function(s, index) {
                    if (typeof state[s] === "undefined") {
                      return <td key={"t"+index} />;
                    } else {
                      let actions = [];

                      if (typeof state[s].shift !== "undefined") {
                        actions.push(<li key="s">{`shift(${state[s].shift})`}</li>);
                      }

                      if (typeof state[s].reduce !== "undefined") {
                        state[s].reduce.forEach(function(p, index) {
                          if (p === -1) {
                            actions.push(<li key={"r"+index}>{"accept"}</li>);
                          } else {
                            actions.push(
                              <li key={"r"+index}>
                                {"reduce("}
                                {formatProduction(productions[p], symbolInfo)}
                                {")"}
                              </li>
                            );
                          }
                        });
                      }

                      let isConflict = (typeof state[s].shift === "undefined" ? 0 : 1) + (typeof state[s].reduce !== "undefined" ? state[s].reduce.length : 0) > 1;

                      return (
                        <td key={"t"+index} className={isConflict ? "conflict" : ""}>
                          <ul>{actions}</ul>
                        </td>
                      );
                    }
                  })
                }
                {
                  symbolInfo.nonterminalOrder.map(function(s, index) {
                    if (typeof state[s] === "undefined") {
                      return <td key={"nt"+index} />;
                    } else if (typeof state[s].shift === "undefined") {
                      return <td key={"nt"+index}><ul /></td>;
                    } else {
                      return (
                        <td key={"nt"+index}>
                          <ul>
                            <li>{state[s].shift}</li>
                          </ul>
                        </td>
                      );
                    }
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}
