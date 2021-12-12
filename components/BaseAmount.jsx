import styles from '../styles/Baseamount.module.scss';

const BaseAmount = ({ data, logout }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>
                <span>
                    Expense Tracker
                </span>
            </h1>
            <p className={styles.logout} onClick={logout}>Logout</p>

            {
                data.map(src => {
                    return (
                        <div className={styles.source} key={src.fields.Source}>
                            <span className={styles.label}>{src.fields.Source}</span>
                            <span className={styles.input}>{src.fields.Amount}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BaseAmount
