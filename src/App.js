import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import './App.css';



function App() {
  const [categoryInput, setCategoryInput] = useState('');
  const [expenseInput, setExpenseInput] = useState('');
  const [costInput, setCostInput] = useState('');
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="App">
     <div className="container">
     <ExpenseForm 
       categoryInput={categoryInput}
       setCategoryInput={setCategoryInput}
       expenseInput={expenseInput}
       setExpenseInput={setExpenseInput} 
       costInput={costInput}
       setCostInput={setCostInput}
       expenses={expenses}
       setExpenses={setExpenses}
     />
     <ExpenseList 
      expenses={expenses}
      setExpenses={setExpenses}
     />
     </div>
    </div>
  );
}

export default App;
