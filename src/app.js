import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
//components
import MainComponent from "./components/Main.js";
import store from "./store.js";

ReactDOM.render(<Provider store={store}>
                <MainComponent />
                </Provider>,document.getElementById("main"));
