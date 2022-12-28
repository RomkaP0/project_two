import React, {useState} from 'react';
import {addDoc, collection} from "firebase/firestore";
import {db} from "../lib/init-firebase";

function ChangeDist() {
    const [Distance, setDist]= useState('')
    const [id, setId] = useState('')

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
                ChangeDistance
            </h4>
            <form className='FormDistance border - 5px' onSubmit={handleSubmit}>
                <label htmlFor='id'>Distance ID</label>
                <input
                    id='id'
                    type='text'
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <label htmlFor='Distance'>Value</label>
                <input
                    id='Model'
                    type='text'
                    value={Distance}
                    onChange={e => setDist(e.target.value)}
                />
                <button type='submit'>Update distance</button>
            </form>
        </div>
    )
}

export default ChangeDist;