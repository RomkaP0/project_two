import {collection} from 'firebase/firestore'
import {db} from "./init-firebase";

export const DistCollectionRef = collection(db, 'UserDistance' )