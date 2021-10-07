import styles from '../styles/Expense.module.scss';
import ExpenseList from './ExpenseList';

const Expenses = () => {
    return (
        <>
            <div className={styles.expense__form}>
                <input className={styles.input}></input>
                <input placeholder="Category" className={styles.input}></input>
                <input placeholder="Source" className={styles.input}></input>
                <input placeholder="Amount" className={styles.input}></input>
                <input placeholder="Description" className={styles.input}></input>
                <button className={styles.button}>Add expense</button>
            </div>
            <ExpenseList />
        </>
    )
}

export default Expenses
