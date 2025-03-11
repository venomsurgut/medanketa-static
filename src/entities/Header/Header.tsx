import { FC } from "react";
import { Link } from "react-router-dom";
import { sile_login, sile_register, site } from "../../shared/const/const";

export const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <Link to="/" itemScope itemType="https://schema.org/ImageObject">
                            <img src="/img/header_logo.svg" alt="Site Title" title="Site Title" />
                            <span hidden itemProp="name">title</span>
                            <span hidden itemProp="author">site</span>
                        </Link>
                    </div>
                    <nav className="header__nav" itemScope itemType="http://schema.org/SiteNavigationElement">
                        <ul itemProp="about" itemScope itemType="http://schema.org/ItemList"
                            className="header__menu header-menu">
                            <li itemScope itemProp="itemListElement" itemType="http://schema.org/ItemList"
                                className="header-menu__item">
                                <Link itemProp="url" to="/about" className="header-menu__link">
                                    О нас
                                    <meta itemProp="name" content="О нас" />
                                </Link>
                            </li>
                            <li itemScope itemProp="itemListElement" itemType="http://schema.org/ItemList"
                                className="header-menu__item">
                                <Link itemProp="url" to="/contacts" className="header-menu__link">
                                    Контакты
                                    <meta itemProp="name" content="Контакты" />
                                </Link>
                            </li>
                            <li itemScope itemProp="itemListElement" itemType="http://schema.org/ItemList"
                                className="header-menu__item">
                                <Link itemProp="url" to="/handbooks" className="header-menu__link">
                                    Справочники
                                    <meta itemProp="name" content="Справочники" />
                                </Link>
                            </li>
                            <li id="burger_support" itemScope itemProp="itemListElement"
                                itemType="http://schema.org/ItemList"
                                className="header-menu__item header-menu__item--mobile">
                                <button className="header-menu__link header__btn btn btn--grey btn-open"
                                        data-open-form="feedback-form">
                                    Напишите нам
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <button className="header__btn btn btn--grey btn-open" data-open-form="feedback-form">
                            Напишите нам
                        </button>
                        <button className="header__burger burger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="header__user-auth user-auth">
                            <div className="user-auth__actions">
                                <Link to={sile_login} className="user-auth__link">Вход</Link>
                                <div className="user-auth__sep">/</div>
                                <Link to={sile_register} className="user-auth__link">Регистрация</Link>
                            </div>
                            <Link to={site} className="user-auth__icon">
                                <img src="/img/user_auth.svg" alt="User" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
