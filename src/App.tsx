import React from 'react';
import MapContainer from './components/MapContainer';
import ComponentWithGeolocation from "./components/Location";
import Example from "./components/Header"
import {BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <div className="">
            <header className="">
                <Example/>

            </header>
            <MapContainer/>
            <ComponentWithGeolocation/>
        </div>
    )
}

export default App;