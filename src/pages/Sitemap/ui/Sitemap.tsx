import {FC} from "react";

export const Sitemap: FC = () => {
    return (
        <main className="main about-page page">

            <section className="about-section section">
                <div className="about-section__row about-content">
                    <div className="about-content__container container">

                        <div className="about-content__grid">
                            <div className="about-content__col">
                                <h1 className="about__title page-title">
                                    Карта сайта
                                </h1>

                                <ul className="sitemap">
                                    <li><a href="/public">Главная</a></li>
                                    <li><a href="/about">О нас</a></li>
                                    <li><a href="/contacts">Контакты</a></li>
                                    <li><a href="/handbooks">Справочники</a></li>
                                    <li><a href="/policy">Политика обработки персональных данных</a></li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}
