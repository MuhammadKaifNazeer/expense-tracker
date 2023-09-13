import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AccountBalances from './components/AccountBalances';
import TransactionForm from './components/TransactionForm';
import History from './components/History';
import Footer from './components/Footer';

const App = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [accountBalance, setAccountBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('all');

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    transactions.forEach((transaction) => {
      if (transaction.transactionType === 'income') {
        income += parseFloat(transaction.amount);
      } else if (transaction.transactionType === 'expense') {
        expense += parseFloat(transaction.amount);
      }
    });

    setTotalIncome(income.toFixed(2));
    setTotalExpense(expense.toFixed(2));
    setAccountBalance((income - expense).toFixed(2));
  }, [transactions]);

  const handleAddTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...transactions];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const handleDeleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  // Sort transactions by date in descending order (latest date first)
  const sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <AccountBalances
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          accountBalance={accountBalance}
        />
        <TransactionForm onAddTransaction={handleAddTransaction} />
        <History
          transactions={sortedTransactions}
          onDeleteTransaction={handleDeleteTransaction}
          filterType={filterType}
          filterDate={filterDate}
          setFilterType={setFilterType}
          setFilterDate={setFilterDate}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
