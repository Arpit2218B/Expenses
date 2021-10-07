import styles from '../styles/Expense.module.scss';

const Expense = () => {
    return (
        <tr className={styles.tableData}>
            <td className={styles.td}>Date</td>
            <td className={styles.td}>Category</td>
            <td className={styles.td}>Source</td>
            <td className={styles.td}>Amount</td>
            <td className={styles.td}>Description</td>
        </tr>
    )
}



export default Expense
