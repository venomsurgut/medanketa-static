import React from "react";
import styles from "./Card.module.scss";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface CardProps {
    title: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className={styles.card}>
            <Icon name="star" />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Button label="Подробнее" />
        </div>
    );
};
