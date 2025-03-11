// import {FC} from "react";
//
// export const Modal: FC = () => {
//     return (
//         <div className="modals">
//             <form id="support_form" className="modals__feedback-form feedback-form form form--modal">
//                 <div className="form__wrap">
//                     <button id="support_form_close" className="form__btn-close btn-close btn btn--close">+</button>
//                     <div className="form__head">
//                         <h5 className="form__title">Напишите нам</h5>
//                     </div>
//
//                     <div className="form__body">
//                         <fieldset className="form__fieldset fieldset">
//                             <input className="form__input input input--text" type="text" name="support_user_name"
//                                    id="support_user_name" placeholder="Ваше имя"/>
//                         </fieldset>
//                         <fieldset className="form__fieldset fieldset fieldset--cols-2">
//                             <input className="form__input input input--mail" type="text" name="support_user_email"
//                                    id="support_user_email" placeholder="Ваша почта"/>
//                             <input className="form__input input input--phone" type="text" name="support_user_phone"
//                                    id="support_user_phone" placeholder="Ваш телефон"/>
//                         </fieldset>
//                         <fieldset className="form__fieldset fieldset">
//                             <textarea className="form__textarea textarea textarea--big" name="support_user_message"
//                                       id="support_user_message" placeholder="Ваше сообщение"></textarea>
//                         </fieldset>
//                     </div>
//                     <div className="form__side">
//                         <button className="form__btn-send btn-send btn btn--primary">Отправить</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     )
// }

import React, { FC, useState } from "react";

export interface dataModal {
    support_user_name: string,
    support_user_email: string,
    support_user_phone: string,
    support_user_message: string,
}

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    sendSupportMessage: (data: dataModal) => void
};

const defaultData: dataModal = {
    support_user_name: "",
    support_user_email: "",
    support_user_phone: "",
    support_user_message: "",
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, sendSupportMessage }) => {
    const [formData, setFormData] = useState(defaultData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData['support_user_email'] || !formData['support_user_message']) {
            alert("Email и Сообщение - обязательные поля!");
            return;
        }

        try {
            void await sendSupportMessage(formData)
            setFormData(defaultData);
            onClose();
        } catch (error) {
            console.error("Ошибка отправки:", error);
            alert("Ошибка отправки сообщения");
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
            onClick={onClose}
        >
            <div className="modals" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleSubmit} id="support_form" className="modals__feedback-form feedback-form form form--modal">
                    <div className="form__wrap">
                        <button onClick={onClose} id="support_form_close"
                                className="form__btn-close btn-close btn btn--close">+
                        </button>
                        <div className="form__head">
                            <h5 className="form__title">Напишите нам</h5>
                        </div>

                        <div className="form__body">
                            <fieldset className="form__fieldset fieldset">
                                <input onChange={handleChange} className="form__input input input--text" type="text" name="support_user_name"
                                       id="support_user_name" placeholder="Ваше имя"/>
                            </fieldset>
                            <fieldset className="form__fieldset fieldset fieldset--cols-2">
                                <input onChange={handleChange} className="form__input input input--mail" type="email" name="support_user_email"
                                       id="support_user_email" placeholder="Ваша почта"/>
                                <input onChange={handleChange} className="form__input input input--phone" type="text" name="support_user_phone"
                                       id="support_user_phone" placeholder="Ваш телефон"/>
                            </fieldset>
                            <fieldset className="form__fieldset fieldset">
                                <textarea onChange={handleChange} className="form__textarea textarea textarea--big" name="support_user_message"
                                          id="support_user_message" placeholder="Ваше сообщение"></textarea>
                            </fieldset>
                        </div>
                        <div className="form__side">
                            <button type={'submit'} className="form__btn-send btn-send btn btn--primary">Отправить</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
