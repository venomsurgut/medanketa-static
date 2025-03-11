import {FC} from "react";

export const Modal: FC = () => {
    return (
        <div className="modals">
            <form id="support_form" className="modals__feedback-form feedback-form form form--modal">
                <div className="form__wrap">
                    <button id="support_form_close" className="form__btn-close btn-close btn btn--close">+</button>
                    <div className="form__head">
                        <h5 className="form__title">Напишите нам</h5>
                    </div>

                    <div className="form__body">
                        <fieldset className="form__fieldset fieldset">
                            <input className="form__input input input--text" type="text" name="support_user_name"
                                   id="support_user_name" placeholder="Ваше имя"/>
                        </fieldset>
                        <fieldset className="form__fieldset fieldset fieldset--cols-2">
                            <input className="form__input input input--mail" type="text" name="support_user_email"
                                   id="support_user_email" placeholder="Ваша почта"/>
                            <input className="form__input input input--phone" type="text" name="support_user_phone"
                                   id="support_user_phone" placeholder="Ваш телефон"/>
                        </fieldset>
                        <fieldset className="form__fieldset fieldset">
                            <textarea className="form__textarea textarea textarea--big" name="support_user_message"
                                      id="support_user_message" placeholder="Ваше сообщение"></textarea>
                        </fieldset>
                    </div>
                    <div className="form__side">
                        <button className="form__btn-send btn-send btn btn--primary">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
