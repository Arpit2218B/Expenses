import styles from '../styles/Baseamount.module.scss';

const BaseAmount = ({ data }) => {

    

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>
                <span>
                    Expense Tracker
                </span>
            </h1>

            {
                data.map(src => {
                    return (
                        <div className={styles.source}>
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
