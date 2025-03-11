import styles from "./hero_section.module.scss";
import {site} from "../../shared/const/const";

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_section__container}>
                <div className={styles.hero__content}>
                    <div className={styles.hero__title}>
                        Создай <strong>анкету</strong>{" "}
                        <a href={site} className={`${styles.hero__btn} ${styles.btn} ${styles.btn__play}`}></a> <br /> за 5 минут
                    </div>
                    <div className={styles.hero__descr}>
                        Конструктор для медицинских опросов и аналитики
                    </div>
                </div>
                <ul className={styles.hero__tooltip}>
                    <li className={styles.hero__tooltip_item}>
                        <a href="#vocations" className={styles.hero__tooltip_link}>
                            <div className={styles.hero__tooltip_text}>Для кого сервис?</div>
                            <div className={styles.hero__tooltip_icon}>
                                <img src="/img/arrow_right.svg" />
                            </div>
                        </a>
                    </li>
                    <li className={styles.hero__tooltip_item}>
                        <a href="#steps" className={styles.hero__tooltip_link}>
                            <div className={`${styles.hero__tooltip_text} ${styles.has_warning}`}>
                                <strong>4 простых этапа </strong> создания <br /> меданкеты
                            </div>
                            <div className={styles.hero__tooltip_icon}>
                                <img src="/img/arrow_right.svg" />
                            </div>
                        </a>
                    </li>
                </ul>
                <picture className={styles.hero_section__picture}>
                    <source media="(min-width: 1200px)" srcSet="/img/hero.png" />
                    <img src="/img/hero-mobile.png" alt="Создай анкету за 5 минут" />
                </picture>
            </div>
        </section>
    );
};

export default HeroSection;
