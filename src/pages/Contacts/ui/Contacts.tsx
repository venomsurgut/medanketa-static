import {FC} from "react";
import {Breadcrumb} from "../../../entities/Breadcrumb/ui/Breadcrumb";
import styles from './Contacts.module.scss'

const mainContentStyle: React.CSSProperties = {
    minHeight: window.innerWidth >= 1200 ? `calc(100vh - 150px)` : `calc(100vh - 202px)`
};

export const Contacts: FC = () => {
    return (
        <main className={`main post-page page post ${styles.main_content}`}>
            <section className="page-head">
                <div className="page-head__container container">
                    <Breadcrumb/>
                    <h1 className="post__title page-title">
                        Контакты
                    </h1>
                </div>
            </section>
            <section className="contacts-section section contacts">
                <div className="contacts-section__container container">
                    <div className="contacts-section__grid contacts-grid">
                        <div className="contacts__item contacts-card card--contacts">
                            <div className="contacts-card__icon">
                                <img src="/img/email_icon.svg"/>
                            </div>
                            <p className="contacts-card__title">
                                E-mail
                            </p>
                            <a href="mailto:antarsib@mail.ru" className="contacts-card__link">
                                info@medanketa.com
                            </a>
                        </div>
                        <div className="contacts__item contacts-card card--contacts">
                            <div className="contacts-card__icon">
                                <img src="/img/phone_icon.svg"/>
                            </div>
                            <p className="contacts-card__title">
                                Номер телефона
                            </p>
                            <a href="tel:+73833832673" className="contacts-card__link">
                                +7 (495) 646-56-65 доб. 539, 603
                            </a>
                        </div>
                        <div className="contacts__item contacts-card card--contacts">
                            <div className="contacts-card__icon">
                                <img src="/img/phone_icon.svg"/>
                            </div>
                            <p className="contacts-card__title">
                                АО "Ланцет"
                            </p>
                            <p>
                                Россия, 107553, г. Москва, ул. Большая Черкизовская, д. 24 А, строение 1, офис № 527
                            </p>
                        </div>
                        <div className="contacts-card__icon">
                            <img src="/img/phone_icon.svg"/>
                        </div>
                        {/*<p className="contacts-card__title">*/}
                        {/*    Соцсети*/}
                        {/*</p>*/}
                        {/*<ul className="contacts-card__socials socials-list">*/}
                        {/*    <li className="socials-list__item">*/}
                        {/*        <a href="" className="socials-list__item-link">*/}
                        {/*            <img src="/img/vk_icon.svg"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="socials-list__item">*/}
                        {/*        <a href="" className="socials-list__item-link">*/}
                        {/*            <img src="/img/wz_icon.svg"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="socials-list__item">*/}
                        {/*        <a href="" className="socials-list__item-link">*/}
                        {/*            <img src="/img/tg_icon.svg"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </section>
        </main>
    )
}
