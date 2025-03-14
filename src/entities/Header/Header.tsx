import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sile_login, sile_register, site } from "../../shared/const/const";
import {Modal} from "../../shared/ui/Modal/Modal";
import CompletedDialog from "../../shared/ui/Dialog/variants/SuccessfulDialog";
import {useSendSupportMessageMutation} from "./api/support_api";
import {useGetPagesQuery} from "../../pages/Dynamic/api/routes_api";

export const Header: FC = () => {
    const [isBurgerActive, setBurgerActive] = useState(false);
    const [isScrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [sendMessageToSupport, {data}] = useSendSupportMessageMutation()
    const {data: pages} = useGetPagesQuery(null)
    useEffect(() => {
        if (data?.sucess) {
            setIsDialogOpen(true)
        }
    }, [data]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 250);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleBurger = () => setBurgerActive(prev => !prev);
    const closeBurger = () => setBurgerActive(false);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""} ${isBurgerActive ? "active" : ""}`}>
            <div className="header__container container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <Link to="/" itemScope itemType="https://schema.org/ImageObject">
                            <img src="/img/header_logo.svg" alt="Site Title" title="Site Title" />
                            <span hidden itemProp="name">title</span>
                            <span hidden itemProp="author">site</span>
                        </Link>
                    </div>
                    <nav className={`header__nav ${isBurgerActive ? "active" : ""}`} style={{zIndex: 100}} itemScope itemType="http://schema.org/SiteNavigationElement">
                        <ul itemProp="about" itemScope itemType="http://schema.org/ItemList"
                            className="header__menu header-menu">
                            {pages && pages?.isActive && (
                                <>
                                    <Link onClick={() => closeBurger()} to={'/about'} className="header-menu__link">
                                        О нас
                                    </Link>
                                    <Link onClick={() => closeBurger()} to={'/handbooks'} className="header-menu__link">
                                        Справочники
                                    </Link>
                                    {pages && pages?.data && pages.data.map((page, index) => {
                                        if (!page.seo?.sidebar) {
                                            return null
                                        }
                                        return (
                                            <li className="header-menu__item" key={`sidebar-items-${index}-${page?.page}`}>
                                                <Link onClick={() => closeBurger()} to={'/page/' + page?.page} className="header-menu__link">
                                                    {page?.name ?? ''}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </>
                            )}
                            <li className="header-menu__item header-menu__item--mobile">
                                <button onClick={() => setIsModalOpen(true)} className="header-menu__link header__btn btn btn--grey btn-open">
                                    Напишите нам
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <button onClick={() => setIsModalOpen(true)} className="header__btn btn btn--grey btn-open">Напишите нам</button>
                        <button className={`header__burger burger ${isBurgerActive ? "active" : ""}`} onClick={toggleBurger}>
                            <span></span><span></span><span></span><span></span>
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
                <Modal sendSupportMessage={(data) => {
                    sendMessageToSupport({
                        email: data.email,
                        message: {
                            name: data?.name ?? 'Анонимный',
                            phone: data?.phone ?? 'Не указан',
                            text: data.message,
                        }
                    })
                }} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <CompletedDialog isOpen={isDialogOpen}/>
            </div>
            {/* Оверлей для закрытия бургера */}
            {isBurgerActive && <div className="global-layout active" onClick={closeBurger}></div>}
        </header>
    );
};
