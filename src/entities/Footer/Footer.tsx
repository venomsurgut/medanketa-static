import {FC} from "react";

export const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__wrap">
                    <div className="footer__logo">
                        <img src="/img/footer_logo.svg"/>
                    </div>
                    <a href="/policy" className="footer__policy-link policy-link">
                        <p className="policy-link__text">
                            Политика обработки персональных данных
                        </p>
                        <div className="policy-link__icon">
                            <img src="/img/arrow_diagonal.svg"/>
                        </div>
                    </a>
                    <div className="footer__contacts">
                        <a className="footer__mail" href="mailto: info@medanketa.com "> info@medanketa.com </a>
                    </div>

                    <a href="/sitemap" className="footer__sitemap-link">карта сайта</a>

                    <p className="footer__copyright">
                        проект АО «Ланцет» {new Date().getFullYear()}
                    </p>
                    <picture className="footer__picture">
                        <img src="/img/footer.png" alt=""/>
                    </picture>
                </div>

            </div>
        </footer>
    )
}
