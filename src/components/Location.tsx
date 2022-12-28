import React from "react";
import { useGeolocated } from "react-geolocated";

const Location = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: Infinity,
            },
            watchPosition: true,
            userDecisionTimeout: Infinity,
            suppressLocationOnMount: false,
            geolocationProvider: navigator.geolocation,
            isOptimisticGeolocationEnabled: true,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
            <tr>
                <td>latitude</td>
                <td>{coords.latitude}</td>
            </tr>
            <tr>
                <td>longitude</td>
                <td>{coords.longitude}</td>
            </tr>
            <tr>
                <td>altitude</td>
                <td>{coords.altitude}</td>
            </tr>
            <tr>
                <td>heading</td>
                <td>{coords.heading}</td>
            </tr>
            <tr>
                <td>speed</td>
                <td>{coords.speed}</td>
            </tr>
            <tr>
                <td>accuracy</td>
                <td>{coords.accuracy}</td>
            </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Location;