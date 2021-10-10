import { useState } from 'react';
import styles from '../styles/Expense.module.scss';
import ExpenseList from './ExpenseList';

const Expenses = ({ expenses, addExpense }) => {

    const [date, setDate] = useState();
    const [category, setCategory] = useState('Food');
    const [source, setSource] = useState('kotak');
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();

    const expenseHandler = () => {
        desc = desc || 'Expenses hogae';
        addExpense(date, category, source, amount, desc);
        setDate('');
        setCategory('');
        setSource('');
        setAmount('');
        setDesc('');
    }

    return (
        <>
            <div className={styles.expense__form}>
                <input placeholder="Date" className={styles.input} value={date} onChange={(e) => setDate(e.target.value)} type="date"></input>
                <select placeholder="Category" className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Self">Self</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
                <select placeholder="Source" className={styles.input} value={source} onChange={(e) => setSource(e.target.value)}>
                    <option value="sbi">State Bank of India</option>
                    <option value="cash">Cash</option>
                    <option value="ub">Union Bank</option>
                    <option value="kotak">Kotak</option>
                </select>
                <input placeholder="Amount" className={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <input placeholder="Description" className={styles.input} value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                <button className={styles.button} onClick={expenseHandler}>Add expense</button>
            </div>
            <ExpenseList expenses={expenses} />
        </>
    )
}

export default Expenses
