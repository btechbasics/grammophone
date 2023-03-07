import AbstractLR1TableComponent from "./abstract_lr1_table_component.js";

export default function({ getCalculation }) {
  return <AbstractLR1TableComponent getCalculation={getCalculation} tableCalculation="parsing.lr.lalr1_table" />;
}