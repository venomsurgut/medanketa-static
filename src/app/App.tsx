import {FC} from "react";
import './styles/index.scss'
import {Modal} from "../shared/ui/Modal/Modal";
import {AppRouter} from "./providers/Router";

const App: FC = () => {
    return (
        <>
            <AppRouter/>
            <div className="global-layout"></div>
            <Modal/>
        </>
    );
};

export default App;

