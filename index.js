import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from "react-redux";
import {store} from './features/store';
const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(

<Auth0Provider
    domain="dev-bvmzyxmgv3k4ifju.us.auth0.com"
    clientId="D6I05tg2V8wVOTT5Vb1bX4RUX8OUtYx0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >



 <Provider store={store}>
    <App />
    </Provider>

  </Auth0Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
