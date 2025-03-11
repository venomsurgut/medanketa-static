import {FC} from "react";
import './styles/index.scss'
import {AppRouter} from "./providers/Router";
import {store} from "./providers/Redux/store";
import {Provider} from "react-redux";

const App: FC = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
            <div className="global-layout"></div>
        </Provider>
    );
};

export default App;

