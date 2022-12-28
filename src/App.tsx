import React from 'react';
import ListCars from "./components/ListCars";
import AddDist from "./components/AddDist";
import WatchDist from "./components/WatchDist";
import ChangeDist from "./components/ChangeDist";

function App() {
    return (
        <div className="container mx-auto max-w-5xl pt-5">
            <h1>Hello</h1>
            <WatchDist/>
            <ChangeDist/>
            <AddDist/>
            <ListCars/>
        </div>
    )
}

export default App;