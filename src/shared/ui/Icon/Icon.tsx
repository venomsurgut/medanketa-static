import React from "react";
import styles from "./Icon.module.scss";

interface IconProps {
    name: string;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
    return <span className={`${styles.icon} ${styles[name]}`}></span>;
};
