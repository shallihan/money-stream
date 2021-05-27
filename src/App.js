import React, {useState, useEffect} from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseChart from './components/ExpenseChart/ExpenseChart';
import CategoryCard from './components/CategoryCard/CategoryCard';
import './App.css';
import './styles/media-queries.css';

function App() {
  const [categoryInput, setCategoryInput] = useState('');
  const [expenseInput, setExpenseInput] = useState('');
  const [costInput, setCostInput] = useState('');
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getLocalInputs();
  }, []);

  useEffect(() => {
    const saveLocalInputs = () => {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    };
    saveLocalInputs();
  }, [expenses]);

  const home = "Home & Utilities";
  const travel =  "Travel";
  const food = "Food & Groceries";
  const media = "Media";
  const bars = "Bars & Restaurants";

  const getTotalCategory = (category) => {
    if(expenses === null) {
      return null;
    } else {
    let filteredCategories = expenses.filter((element) => element.category === category);
    let allCosts = filteredCategories.map(function(element) { return parseFloat(element.cost) });
    return allCosts;
    }
  }

  const getLocalInputs  = () => {
    if(localStorage.getItem('expenses') === null) 
    {
      localStorage.setItem('expenses', JSON.stringify([]));
    } else {
        let expensesLocal = JSON.parse(localStorage.getItem('expenses'));
        setExpenses(expensesLocal);
    }
  }

  let totalHome = getTotalCategory(home);
  let totalTravel = getTotalCategory(travel);
  let totalFood = getTotalCategory(food);
  let totalMedia = getTotalCategory(media);
  let totalBars = getTotalCategory(bars);

  return (
    <div className="App">
      <div className="container">
        <ExpenseChart 
          totalHome={totalHome}
          totalTravel={totalTravel}
          totalFood={totalFood}
          totalMedia={totalMedia}
          totalBars={totalBars}/>
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
        <div className='card-background'>
          <CategoryCard   
            totalHome={totalHome}
            totalTravel={totalTravel}
            totalFood={totalFood}
            totalMedia={totalMedia}
            totalBars={totalBars}/>
        </div>
      </div>
    </div>
  );
}

export default App;
