import React, { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "ToiletPaper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
