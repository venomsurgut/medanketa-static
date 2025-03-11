import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonUI } from 'shared/ui/ButtonUI';
import {Dialog} from '../index'

interface CompletedDialogProps {
    isOpen: boolean;
}

export const CompletedDialog: FC<CompletedDialogProps> = ({ isOpen }) => {
    const navigate = useNavigate();

    const onClose = () => {
        navigate('/');
    };

    return (
        <Dialog transparent isOpen={isOpen} {...{ onClose }} size="md">
            <p className="dialog-title">Успешно!</p>
            <p className="dialog-text">Результаты анкеты записаны. Спасибо за участие в опросе.</p>
            <ButtonUI text="Вернуться на главную" view="primary" onClick={() => navigate('/')} />
        </Dialog>
    );
};

export default CompletedDialog;
