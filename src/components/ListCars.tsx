import {useEffect, useState} from "react";
import {collection, getDocs} from 'firebase/firestore'
import {db} from "../lib/init-firebase";

export default function ListCars() {
    const [TypeOfCars, setCars] = useState<any[]>([])

    useEffect(() => {
        getCars()
    }, [])

    useEffect(() => {
            console.log(TypeOfCars)
        }, [TypeOfCars]
    )

    function getCars() {
        const carCollectionRef = collection(db, 'TypeOfCars')
        getDocs(carCollectionRef)
            .then(response => {
                const cs = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setCars(cs)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <h4>ListCars</h4>
            <ul className="listCars my-6 ml-10">
                {TypeOfCars.map(car=>(
                    <li key={car.id}>{car.data.Model+" - "+ car.data.Type}</li>
                ))}
            </ul>
        </div>
    )
}