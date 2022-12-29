import React from 'react';
import MapContainer from './components/MapContainer';
import ComponentWithGeolocation from "./components/Location";
import Example from "./components/example"


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