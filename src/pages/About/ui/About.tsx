import { FC } from "react";
import {Breadcrumb} from "../../../entities/Breadcrumb/ui/Breadcrumb";

export const About: FC = () => {
    return (
        <main className="main about-page page">
            <section className="about-section section">
                <div className="about-section__row about-content">
                    <div className="about-content__container container">
                        <div className="about-content__grid">
                            <div className="about-content__col">
                                <Breadcrumb/>
                                <h1 className="about__title page-title">
                                    О нас
                                </h1>
                                <div className="about-content__text">
                                    <p>MEDANKETA — это специализированная платформа для проведения опросов и
                                        исследований в области здравоохранения, созданная для поддержки медицинского
                                        сообщества.
                                    </p>
                                </div>
                            </div>
                            <div className="about-content__col">
                                <picture className="about-content__preview-picture">
                                    {/*<source media="(min-width: )" srcSet=""/>*/}
                                    <img src="/img/onas-1.png" alt=""/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section__row about-content">
                    <div className="about-content__container container">
                        <div className="about-content__grid">
                            <div className="about-content__col">
                                <picture className="about-content__preview-picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/onas-2.jpg" alt=""/>
                                </picture>
                            </div>
                            <div className="about-content__col">
                                <div className="about-content__text">
                                    <h1>Наши цели:</h1>
                                    <ul>
                                        <li>Сделать исследования и сбор данных доступными, удобными и эффективными для
                                            всех, кто работает в медицине, фармацевтике, научной и образовательной
                                            сфере.
                                        </li>
                                        <li>Собирать точные данные, анализировать их и находить решения для
                                            совершенствования системы здравоохранения.
                                        </li>
                                        <li>Наш сервис учитывает специфику медицинских исследований, предлагая
                                            использовать готовые справочники (МКБ-10, ЛПУ, МНН и др.), гибкие настройки
                                            опросов и наглядную аналитику результатов.
                                        </li>
                                    </ul>
                                    <h1>Наша миссия:</h1>
                                    <ul>
                                        <li>Поддерживать научные исследования и открывать новые возможности для роста и
                                            развития системы здравоохранения.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-section__row about-content">
                    <div className="about-section__container container">
                        <div className="about-content__grid">
                            <div className="about-content__col">
                                <div className="about-content__text">
                                    <h1>Что делает нас уникальными?</h1>
                                    <p>Узкая специализация:</p>
                                    <ul>
                                        <li>Защищенное пространство для хранения и обработки собранных медицинских
                                            данных.
                                        </li>
                                        <li>Простая настройка, автоматическая аналитика и возможность выгрузки данных
                                            делают нашу платформу идеальной для работы с большими объёмами информации.
                                        </li>
                                    </ul>
                                    <p>Инструменты для всех:</p>
                                    <ul>
                                        <li>
                                            Мы предлагаем удобный функционал для представителей медицины,
                                            фармацевтики, научных институтов, студентов и аспирантов. Платформа
                                            подходит для проведения исследований любой сложности и масштаба.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-content__col">
                                <picture className="about-content__preview-picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/onas-3.jpg" alt=""/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
