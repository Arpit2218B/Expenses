import { useState } from 'react';
import styles from '../styles/Expense.module.scss';
import ExpenseList from './ExpenseList';

const Expenses = ({ expenses, addExpense }) => {

    const [date, setDate] = useState();
    const [category, setCategory] = useState();
    const [source, setSource] = useState();
    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();

    const expenseHandler = () => {
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
                <input placeholder="Category" className={styles.input} value={category} onChange={(e) => setCategory(e.target.value)}></input>
                <input placeholder="Source" className={styles.input} value={source} onChange={(e) => setSource(e.target.value)}></input>
                <input placeholder="Amount" className={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <input placeholder="Description" className={styles.input} value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                <button className={styles.button} onClick={expenseHandler}>Add expense</button>
            </div>
            <ExpenseList expenses={expenses} />
        </>
    )
}

export default Expenses
