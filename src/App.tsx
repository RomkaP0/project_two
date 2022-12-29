import React from 'react';
import ListCars from "./components/ListCars";
import AddDist from "./components/AddDist";
import WatchDist from "./components/WatchDist";
import ChangeDist from "./components/ChangeDist";
import MapContainer from './components/MapContainer';
import ComponentWithGeolocation from "./components/Location";


function App() {
    return (
        <div className="container">
            <MapContainer/>
            <ComponentWithGeolocation/>
        </div>
    )
}

export default App;