import React from 'react';
import {YMaps, Map, Placemark, GeolocationControl} from '@pbe/react-yandex-maps';

export default function App() {
    const defaultState = {
        center: [55.684758, 82.438521],
        zoom: 5,
    };

    return (
        <YMaps>
            <Map defaultState={defaultState}>
                <Placemark geometry={[56.484758, 84.938521]} />
                <GeolocationControl options={{ float: "left" }} />
            </Map>
        </YMaps>
    );
}