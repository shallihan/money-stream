import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const ExpenseForm = 
  ({
      categoryInput, 
      setCategoryInput, 
      expenseInput, 
      costInput, 
      setExpenseInput, 
      setCostInput, 
      expenses, 
      setExpenses,
    }) => {

    const inputCategoryHandler = (e) => {
        setCategoryInput(e.target.value);
    };

    const inputExpenseHandler = (e) => {
        setExpenseInput(e.target.value);
    };

    const inputCostHandler = (e) => {
        setCostInput(e.target.value);
    };
    
    const submitExpenseHandler = (e) => {
        e.preventDefault();
        setExpenses([
            ...expenses, 
            {id: uuidv4(), category: categoryInput, item: expenseInput, cost: costInput, timestamp: Date.now()},
        ]);
        setCategoryInput('');
        setExpenseInput('');
        setCostInput('');
    }

    return (
        <form>
            <div className="form-inputs">
              <input 
                type="text" 
                className="category" 
                placeholder="eg. Home & Utilities" 
                value={categoryInput} 
                onChange={inputCategoryHandler} 
                maxLength="25"
                required="required"/>
           <input 
                type="text" 
                className="expense" 
                placeholder="eg. Drinks" 
                value={expenseInput} 
                onChange={inputExpenseHandler} 
                maxLength="25"
                required="required"/>
              <div className="cost">
                <label htmlFor="cost"></label>
                <input 
                  type="text" 
                  name="cost" 
                  id="cost" 
                  placeholder="£" 
                  value={costInput} 
                  onChange={inputCostHandler}
                  maxLength="8" 
                  required="required"/>
              </div>
            </div>
            <button type="submit" className="submit-button" onClick={submitExpenseHandler}><i className="fas fa-plus"></i></button>
        </form>
    );
}


export default ExpenseForm;