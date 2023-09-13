import React from 'react';

const AccountBalances = ({ accountBalance, totalIncome, totalExpense }) => {
  return (
    <div className="container mt-4">
      <h2>Account Balances</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="alert alert-primary">
            <strong>Account Balance:</strong> {accountBalance}
          </div>
        </div>
        <div className="col-md-4">
          <div className="alert alert-success">
            <strong>Total Income:</strong> {totalIncome}
          </div>
        </div>
        <div className="col-md-4">
          <div className="alert alert-danger">
            <strong>Total Expense:</strong> {totalExpense}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalances;
