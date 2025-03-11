import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface AnimatedItemProps {
    children: ReactNode;
    delay?: number;
    duration?: number
}

export const AnimatedItem: FC<AnimatedItemProps> = ({ children, delay = 0, duration = 0.45 }) => {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
};
