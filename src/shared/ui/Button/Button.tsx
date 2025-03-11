import React, {CSSProperties} from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    label: string;
    style?: CSSProperties
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, style, onClick }) => {
    return (
        <button {...{style, onClick}} className={styles.button}>
            {label}
        </button>
    )
};
