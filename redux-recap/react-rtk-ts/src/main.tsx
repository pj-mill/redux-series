import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";

import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
