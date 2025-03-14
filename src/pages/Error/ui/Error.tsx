import {FC} from "react";
import styles from './Error.module.scss'

export const Error: FC = () => {
    return (
        <div className={styles.main_content}>
            <h1 style={{textAlign: 'center'}}>Данная страница недоступна или не существует</h1>
        </div>
    )
}
