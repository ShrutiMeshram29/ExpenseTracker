import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/Expenses-Context";

function AllExpenses() {
  const expenseCtx = useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod="Total" />;
}

export default AllExpenses;
