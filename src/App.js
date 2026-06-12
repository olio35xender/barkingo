import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Annual Vaccination', amount: 120.00, category: 'Medical', date: '2026-06-10' },
    { id: 2, title: 'Premium Kibble Bag', amount: 85.50, category: 'Food', date: '2026-06-11' }
  ]);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
    if (selectedExpense && selectedExpense.id === id) {
      setSelectedExpense(null);
    }
  };

  return (
    <div className="app-container">
      <Header expenses={expenses} />
      <div className="main-layout">
        <div className="left-column">
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList 
            expenses={expenses} 
            onDeleteExpense={deleteExpense} 
            onSelectExpense={setSelectedExpense} 
          />
        </div>
        <div className="right-column">
          <Receipt selectedExpense={selectedExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
