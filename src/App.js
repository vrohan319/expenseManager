import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
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

  const addExpenseHandler = (expense) => {
    console.log("In app.js") ;
    console.log(expense) ;
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
