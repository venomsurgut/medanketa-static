import {FC} from "react";

export interface ContactBlockProps {
    data: { icon?: string; label: string; value: string }[]
}

export const ContactBlock: FC<ContactBlockProps> = ({data})=> {

    return (
        <section style={{padding: '20px 0'}}>
            <div className="contacts-section__grid contacts-grid">
                {data.map((contact) => {
                    const {
                        icon = "phone_icon",
                        label,
                        value
                    } = contact

                    const actual = icon === '' ? "phone_icon" : icon

                    return (
                        <div className="contacts__item contacts-card card--contacts">
                            <div className="contacts-card__icon">
                                <img src={'/img/' + actual + '.svg'}/>
                            </div>
                            <p className="contacts-card__title">
                                {label}
                            </p>
                            <a href="tel:+73833832673" className="contacts-card__link">
                                {value}
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};
