import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface AnimatedPictureProps {
    desktopSrc: string;
    mobileSrc: string;
    alt?: string;
}

export const AnimatedPictureHome: FC<AnimatedPictureProps> = ({ desktopSrc, mobileSrc, alt = "Image" }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            setAnimate(true);
        }
    }, [isLoaded]);

    return (
        <motion.picture
            className="hero-section__picture"
            initial={{ x: 30 }}
            animate={animate ? { x: 0 } : {}}
            transition={{ duration: 3, type: 'spring' }}
        >
            <source media="(min-width: 1200px)" srcSet={desktopSrc} />
            <img
                src={mobileSrc}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </motion.picture>
    );
};
