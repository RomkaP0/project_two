import React from 'react';
import MapContainer from './components/MapContainer';
import ComponentWithGeolocation from "./components/Location";


function Main() {
    return (
        <div className="">
            <MapContainer/>
            <ComponentWithGeolocation/>
        </div>
    )
}

export default Main;