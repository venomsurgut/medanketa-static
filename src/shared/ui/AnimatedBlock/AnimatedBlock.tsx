import { motion } from "framer-motion";
import {FC, ReactNode} from "react";
import { useInView } from "react-intersection-observer";
import styles from "./AnimatedBlock.module.scss";

interface AnimatedBlockProps {
    children: ReactNode;
    delay?: number;
}

export const AnimatedBlock: FC<AnimatedBlockProps> = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Анимация проигрывается только один раз
        threshold: 0.2, // Запускается, когда 20% блока в видимости
    });

    return (
        <motion.div
            ref={ref}
            className={styles.block}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};
