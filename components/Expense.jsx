import styles from '../styles/Expense.module.scss';

const Expense = ({ expense }) => {
    return (
        <tr className={styles.tableData}>
            <td className={styles.td}>{expense.fields.Date}</td>
            <td className={styles.td}>{expense.fields.Category}</td>
            <td className={styles.td}>{expense.fields.Source}</td>
            <td className={styles.td}>{expense.fields.Amount}</td>
            <td className={styles.td}>{expense.fields.Description}</td>
        </tr>
    )
}



export default Expense
