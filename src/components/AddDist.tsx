import {useEffect, useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../lib/init-firebase";


export default function AddDist(){

    const [Distance, setDist]= useState('')

    function handleSubmit(e: { preventDefault: () => void; }){
        e.preventDefault()
        let numDist=Number(Distance)
        if (Distance ===''||isNaN(numDist)){
            return
        }

        const  distanceCollRef = collection(db, 'UserDistance')
        addDoc(distanceCollRef, {Distance:numDist}).then(response=>{
            console.log(response.id)
        }).catch(error=> {
            console.log(error.message)
        })

        alert(Distance)
    }

    return(
        <div>
            <h4>
                AddDistance
            </h4>
            <form className='FormDistance ' onSubmit={handleSubmit}>
                <label htmlFor='name'>input dist</label>
                <input className='inputdist border - 5px margin 6px'
                    id='Model'
                    type='text'
                    value={Distance}
                    onChange={e => setDist(e.target.value)}
                />
                <button type='submit'>Change distance</button>
            </form>
        </div>
    )
}