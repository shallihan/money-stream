import React from 'react';
import FlatList from 'flatlist-react';

const ExpenseList = ({expenses, setExpenses}) => {


  const renderExpense = (expense) => {
    const deleteExpense = () => {
      setExpenses(expenses.filter((element) => element.id !== expense.id));
    }
    return (
        <li key={expense.id}>
          <b>{expense.item}</b><div><span>£{expense.cost}</span><i className="fas fa-times" onClick={deleteExpense}></i></div>
        </li>
    )
  }

    return (
      <div className="expenses-container">
        <ul>
          <FlatList
            list={expenses}
            renderItem={renderExpense}
            renderOnScroll
            sortBy={"timestamp"}
            sortDescending
            renderWhenEmpty={() => <div className="no-expenses">No expenses here</div>}
          />
        </ul>
      </div>
    );
};

export default ExpenseList;