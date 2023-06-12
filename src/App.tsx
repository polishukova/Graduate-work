import { Navigation } from "./Components/Navigation/Navigation";
import "./App.scss"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Store/store";

export const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </Provider>
    )

}

