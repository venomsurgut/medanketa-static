import React from "react";
import {HandbookSection} from "./HandbookSection";
import {site} from "../../../shared/const/const";
import {AnimatedPictureHome} from "../../../shared/ui/AnimatedImage/AnimatedImage";
import {AnimatedItem} from "../../../shared/ui/AnimatedItem/AnimatedItem";
import {Link} from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <main className="main home">
            <section className="section hero-section hero">
                <div className="hero-section__container container">
                    <div className="hero__content">
                        <AnimatedItem delay={0.25}>
                            <div className="hero__title">
                                Создай <strong>анкету</strong>
                                <a href={site} className="hero__btn btn btn--play"></a>
                                <br/> за 5 минут
                            </div>
                        </AnimatedItem>
                        <AnimatedItem delay={0.4}>
                            <div className="hero__descr">
                                Конструктор для медицинских опросов и аналитики
                            </div>
                        </AnimatedItem>
                        {/*<AnimatedItem delay={0.55}>*/}
                        {/*    <Button onClick={() => {*/}
                        {/*        window.location.href = site*/}
                        {/*    }} style={{marginTop: 15}} label={'Создать анкету'}/>*/}
                        {/*</AnimatedItem>*/}
                    </div>
                    <ul className="hero__tooltip">
                        <li className="hero__tooltip-item">
                            <a href="#vocations" className="hero__tooltip-link">
                                <div className="hero__tooltip-text">
                                    Для кого сервис?
                                </div>
                                <div className="hero__tooltip-icon">
                                    <img src="/img/arrow_right.svg"/>
                                </div>
                            </a>
                        </li>
                        <li className="hero__tooltip-item">
                            <a href="#steps" className="hero__tooltip-link">
                                <div className="hero__tooltip-text has-warning">
                                    <strong>4 простых этапа </strong> создания <br/> меданкеты
                                </div>
                                <div className="hero__tooltip-icon">
                                    <img src="/img/arrow_right.svg"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <AnimatedPictureHome
                        alt={"Создай анкету за 5 минут"}
                        desktopSrc={"/img/hero.png"}
                        mobileSrc={"/img/hero-mobile.png"}
                    />
                </div>
            </section>

            <section className="section benefit-section benefit">
                <div className="benefit-section__container container">
                    <p className="benefit-section__title section__title">
                        Преимущества
                    </p>
                </div>
                <div className="benefit-section__container container">
                    <div className="benefit-grid grid">
                        <div className="benefit-grid__item benefit-card card--benefit card">
                            <div className="benefit-card__wrap card__wrap">
                                <div className="benefit-card__content card__content">
                                    <p className="benefit-card__title card__title">Создай анкету за 5 минут</p>
                                    <p className="benefit-card__descr card__descr">(опросы, тесты, фокус-группы)</p>
                                </div>

                                <picture className="benefit-card__picture card__picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/benefit-1.jpg" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="benefit-grid__item benefit-card card--benefit card">
                            <div className="benefit-card__wrap card__wrap">
                                <div className="benefit-card__content card__content">
                                    <p className="benefit-card__title card__title">
                                        Создавай анонимные опросы
                                    </p>
                                    <p className="benefit-card__descr card__descr">(возможность проходить анкету без
                                        регистрации)</p>
                                    <a href={site} className="benefit-card__btn btn btn--white card__btn">
                                        Подробнее
                                    </a>
                                </div>
                                <picture className="benefit-card__picture card__picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/benefit-2.jpg" alt=""/>
                                </picture>
                            </div>
                            <div className="benefit-card__side card__side">
                                <p className="benefit-card__side-text card__side-text">
                                    Зарегистрируйтесь на платформе MedAnketa и начните создавать опросы для своих
                                    медицинских исследований уже сегодня.
                                </p>
                                <a href={site}
                                   className="benefit-card__side-btn btn btn--border-primary card__btn">
                                    Зарегистрироваться
                                </a>
                            </div>
                        </div>
                        <div className="benefit-grid__item benefit-card card--benefit card">
                            <div className="benefit-card__wrap card__wrap">
                                <div className="benefit-card__content card__content">
                                    <p className="benefit-card__title card__title">
                                        Делай рассылки на свои опросы
                                    </p>

                                    <p className="benefit-card__descr card__descr">(QR код или ссылки)</p>
                                </div>
                            </div>
                        </div>
                        <div className="benefit-grid__item benefit-card card--benefit card">
                            <div className="benefit-card__wrap card__wrap">
                                <div className="benefit-card__content card__content">
                                    <p className="benefit-card__title card__title">
                                        Храни <br/> свои данные
                                    </p>

                                    <p className="benefit-card__descr card__descr">(анкеты, статистика, респонденты)</p>
                                </div>

                                <picture className="benefit-card__picture card__picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/benefit-4.jpg" alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="benefit-grid__item benefit-card card--benefit card">
                            <div className="benefit-card__wrap card__wrap">
                                <div className="benefit-card__content card__content">
                                    <p className="benefit-card__title card__title">
                                        Используй готовые варианты ответов
                                    </p>

                                    <p className="benefit-card__descr card__descr">(справочники готовых ответов на
                                        сайте)</p>
                                </div>

                                <picture className="benefit-card__picture card__picture">
                                    <source media="(min-width: )" srcSet=""/>
                                    <img src="/img/benefit-5.jpg" alt=""/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section steps-section steps" id="steps">
                <div className="steps-section__container container">
                    <p className="section__title">
                        Основные этапы создания анкеты
                    </p>
                </div>
                <div className="steps-section__container container">
                    <div className="steps__content">
                        <div className="step-card card card--step">
                            <p className="step-card__title card__title">
                                Этап 1
                            </p>
                            <p className="step-card__descr">
                                Создаём анкету или тесты
                            </p>
                        </div>
                        <div className="step-card card card--step">
                            <p className="step-card__title card__title">
                                Этап 2
                            </p>
                            <p className="step-card__descr">
                                Делай рассылку или встраивай анкету в соцсети или мессенджеры
                            </p>
                        </div>
                        <div className="step-card card card--step">
                            <p className="step-card__title card__title">
                                Этап 3
                            </p>
                            <p className="step-card__descr">
                                Отслеживай статистику прохождения анкеты
                            </p>
                        </div>
                        <div className="step-card card card--step">
                            <p className="step-card__title card__title">
                                Этап 4
                            </p>
                            <p className="step-card__descr">
                                Храни все полученные данные в личном кабинете
                            </p>
                        </div>
                    </div>
                    <div className="steps__end">
                        <div className="steps__quote quote">
                            <div className="quote__icon">
                                <div className="quote__icon-wrap">
                                    <div className="quote__icon-text">!</div>
                                    <div className="quote__icon-bg"></div>
                                </div>
                            </div>
                            Все ваши результаты опросов, базы респондентов, и шаблоны анкет будут храниться в вашем
                            личном кабинете на сайте МедАнкета
                        </div>
                    </div>
                    <picture className="steps__picture">
                        <source media="(min-width: )" srcSet=""/>
                        <img src="/img/steps.jpg" alt=""/>
                    </picture>
                </div>
            </section>

            <section className="vocations-section section vocations" id="vocations">
                <div className="vocations-section__container container">
                    <p className="section__title">
                        Кому полезен сервис
                    </p>
                </div>
                <div className="vocations-section__container container">
                    <div className="vocations__grid vocations-grid">
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Врачи
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-1.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Администраторы
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-2.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Статистики
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-3.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Преподаватели
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-4.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Социологи
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/5.png" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Маркетологи
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-6.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                Фармацевты
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-7.jpg" alt=""/>
                            </picture>
                        </div>
                        <div className="vocations__grid-item vocations-card card card--vocations">
                            <p className="vocations-card__title card__title">
                                HR
                            </p>
                            <picture className="vocations-card__picture card__picture">
                                <source media="(min-width: )" srcSet=""/>
                                <img src="/img/vocations-8.jpg" alt=""/>
                            </picture>
                        </div>
                    </div>
                    <div className="vocations__qoute">
                        <p className="vocations__qoute-text">
                            Зарегистрируйтесь на платформе MedAnketa и начните создавать опросы для своих медицинских
                            исследований уже сегодня.
                        </p>
                        <a href={site} className="vocations__btn btn btn--primary">
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
            </section>

            <section className="handbook-section section handbook">
                <div className="handbook-section__container container">
                    <div className="handbook-section__grid">
                        <div className="handbook-section__side">
                            <p className="handbook-section__title section__title">
                                Готовые варианты ответов
                            </p>
                            <div className="handbook-section__descr">
                                <p className="handbook-section__text">
                                    Готовые варинты ответов сформерованные из медецинских справочников, перечней и
                                    реестров.
                                </p>
                                <p className="handbook-section__text">
                                    Позволяют быстро создать анкету или тест на медцинскую тематику
                                </p>
                            </div>
                            <Link to="/handbooks" className="handbook-section__btn btn btn--primary btn--with-icon">
                                <img src="/img/book_icon.svg"/>
                                Все справочники
                            </Link>
                        </div>
                        <HandbookSection/>
                    </div>
                </div>
            </section>
        </main>
    );
};
