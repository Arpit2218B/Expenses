import styles from '../styles/Baseamount.module.scss';

const BaseAmount = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>
                <span>
                    Expense Tracker
                </span>
            </h1>
            
            <div className={styles.source}>
                <span className={styles.label}>Union Bank</span>
                <input className={styles.input}></input>
            </div>
            <div className={styles.source}>
                <span className={styles.label}>State Bank</span>
                <input className={styles.input}></input>
            </div>
            <div className={styles.source}>
                <span className={styles.label}>Kotak Bank</span>
                <input className={styles.input}></input>
            </div>
            <div className={styles.source}>
                <span className={styles.label}>Cash</span>
                <input className={styles.input}></input>
            </div>
        </div>
    )
}

export default BaseAmount
