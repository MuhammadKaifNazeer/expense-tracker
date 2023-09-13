import React, { useState } from 'react';

const History = ({ transactions, onDeleteTransaction, filterType, filterDate, setFilterType, setFilterDate }) => {
  // Reverse the transactions array to show the latest transactions at the top
  const reversedTransactions = [...transactions].reverse();

  return (
    <div className="container mt-4">
      <h2>History</h2>
      {/* Filter controls go here */}
      <table className="table mt-2">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reversedTransactions.map((transaction, index) => (
            <tr key={index} className={transaction.transactionType === 'income' ? 'bg-success' : 'bg-light'}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.transactionType}</td>
              <td>{transaction.date}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteTransaction(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
