import React, {useState} from 'react';
import {doc, updateDoc} from "firebase/firestore";
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
        const docRef =  doc(db, 'UserDistance', id)
        updateDoc(docRef,{Distance})
            .then(responce=>{
                console.log(responce)
            })
            .catch(error=> console.log(error.message))
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