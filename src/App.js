import Expenses from './components/Expense/Expenses';

function App() {
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
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
