import useGeolocation from "react-hook-geolocation";
import {useCallback, useEffect, useState} from "react";
import {DEFAULT_POSITION_OPTIONS} from "../constants/geoLocationOptions";
import {doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../lib/init-firebase";
import {DistCollectionRef} from "../lib/firestore.collections";

let sumDist = 0
let array: number[] = []
export default function ReactHookGeolocationWithUseCallback() {
    const [distance, setDistance] = useState<any[]>([])
    const onGeolocationUpdate = useCallback(() => {
        console.log("location updated");
    }, []);

    const geolocation = useGeolocation(
        DEFAULT_POSITION_OPTIONS,
        onGeolocationUpdate,
    );

    useEffect(() => {
        if (geolocation.timestamp != null) {
            if (array.length < 4) {
                array.push(geolocation.latitude)
                array.push(geolocation.longitude)

            } else {
                sumDist += getDistanceFromLatLonInKm(array[0], array[1], array[2], array[3])
                array[0] = array[2]
                array[1] = array[3]
                array[2] = (geolocation.latitude)
                array[3] = (geolocation.longitude)
                const docRef = doc(db, 'UserDistance', "SlkQPl9yBXJsBLA4QcMA")
                let Distance = sumDist
                updateDoc(docRef, {Distance})
                    .then(responce => {
                        console.log(responce)
                    })
                    .catch(error => console.log(error.message))
            }
            console.log(sumDist)
        }

    }, [geolocation.timestamp]);

    function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
        let R = 6371; // Radius of the earth in km
        let dLat = deg2rad(lat2 - lat1);  // deg2rad below
        let dLon = deg2rad(lon2 - lon1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let d = R * c; // Distance in km
        return d;
    }

    function deg2rad(deg: number) {
        return deg * (Math.PI / 180)
    }


    useEffect(() => {

        const unsubscribe = onSnapshot(DistCollectionRef, snapshot => {
            setDistance(snapshot.docs.map(doc => ({data: doc.data(),id: doc.id})))
        })

        return () => {
            unsubscribe()
        }
    }, [])


    return !geolocation.error ? (
        <div>
            <ul>
                <li>Latitude: {geolocation.latitude}</li>
                <li>Longitude: {geolocation.longitude}</li>
                <li>Location accuracy: {geolocation.accuracy}</li>
                <li>Altitude: {geolocation.altitude}</li>
                <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
                <li>Heading: {geolocation.heading}</li>
                <li>Speed: {geolocation.speed}</li>
                <li>Timestamp: {geolocation.timestamp}</li>
            </ul>

            <div>
                <h4>Distance</h4>
                <ul className="listDist my-6 ml-10">
                    {distance.map(dist => (
                        <li key={dist.id}>{dist.data.Distance} : {dist.id}</li>
                    ))}
                </ul>
            </div>
        </div>
    ) : (
        <p>No geolocation, sorry.</p>
    );
}