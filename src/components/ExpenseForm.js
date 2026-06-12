import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date
    });

    setTitle('');
    setAmount('');
    setCategory('Food');
    setDate('');
  };

  return (
    <div className="form-card">
      <h3>Log Pet Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item / Service Label</label>
          <input 
            type="text" 
            placeholder="e.g. Flea Treatment, Chew Toy" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Canine Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food & Treats</option>
            <option value="Medical">Medical & Vet</option>
            <option value="Toys">Toys & Gear</option>
            <option value="Grooming">Grooming</option>
            <option value="Training">Training</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
        <button type="submit" class="submit-btn">Add to Ledger</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
