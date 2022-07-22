import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Exepenses() {

    const expenses = [
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

  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default Exepenses;
