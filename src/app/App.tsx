import {FC} from "react";
import './styles/index.scss'
import {AppRouter} from "./providers/Router/Router";
import {store} from "./providers/Redux/store";
import {Provider} from "react-redux";
import {Helmet} from "react-helmet";

const App: FC = () => {
    return (
        <Provider store={store}>
            <Helmet>
                <title>{'Medanketa'}</title>
            </Helmet>
            <AppRouter/>
            <div className="global-layout"></div>
        </Provider>
    );
};

export default App;

