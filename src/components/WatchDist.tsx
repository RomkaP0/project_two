import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../lib/init-firebase";
import {DistCollectionRef} from "../lib/firestore.collections";


export default function WatchDist() {
    const [UserDistance, setDist] = useState<any[]>([])

    useEffect(() => {
        getDistance()
    }, [])

    useEffect(() => {
            console.log(UserDistance)
        }, [UserDistance]
    )

    function getDistance() {
        //const DistCollectionRef = collection(db, 'UserDistance')
        getDocs(DistCollectionRef)
            .then(response => {
                const ds = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                }))
                setDist(ds)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <h4>Distance</h4>
            <button onClick={() => getDistance()}>Refresh distance</button>
            <ul className="listDist my-6 ml-10">
                {UserDistance.map(dist=>(
                    <li key={dist.id}>{dist.data.Distance} : {dist.id}</li>
                ))}
            </ul>
        </div>
    )
}