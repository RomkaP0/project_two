import React from 'react';
import {Product} from "./components/Product";
import ListCars from "./components/ListCars";

function App() {
    return (
        <div className="container mx-auto max-w-5xl pt-5">
            <h1>Hello</h1>
            <Product/>
            <ListCars/>
        </div>
    )
}

export default App;