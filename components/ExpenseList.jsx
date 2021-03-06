import styles from '../styles/Expense.module.scss';
import Expense from './Expense';

const ExpenseList = ({ expenses }) => {
    return (
        <table className={styles.table}>
            <tr className={styles.tr}>
                <td className={styles.th}>Date</td>
                <td className={styles.th}>Category</td>
                <td className={styles.th}>Source</td>
                <td className={styles.th}>Amount</td>
                <td className={styles.th}>Description</td>
            </tr>
            {expenses.map(expense => (
                <Expense expense={expense} key={1}/>
            ))}
        </table>
    )
}

export default ExpenseList
