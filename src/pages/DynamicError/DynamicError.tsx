import {FC} from "react";
import styles from './DynamicError.module.scss'

interface DynamicErrorProps {
    header: string
    text: string
}

export const DynamicError: FC<DynamicErrorProps> = ({header, text}) => {
    return (
        <main className={`main post-page page post ${styles.main_content}`}>
            <section className="page-head">
                <div className="page-head__container container">
                    <h1 className="post__title page-title">
                        {header}
                    </h1>
                </div>
            </section>
            <section className="contacts-section section contacts">
                <div className="contacts-section__container container">
                    {text}
                </div>
            </section>
        </main>
    )
}
