import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import DashBoard from "./DashBoard";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
        </Routes>
    </BrowserRouter>);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
