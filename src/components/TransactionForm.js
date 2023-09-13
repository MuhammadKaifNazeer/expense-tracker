import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount,
      description,
      transactionType,
      date,
    };
    onAddTransaction(newTransaction);
    // Clear the form fields
    setAmount('');
    setDescription('');
    setTransactionType('income');
    setDate('');
  };

  return (
    <div className="container mt-4">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control my-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control my-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control my-2"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                required
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control my-2"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success my-3" style={{width:"100%"}}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
