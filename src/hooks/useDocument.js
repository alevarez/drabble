
import { useEffect, useState } from 'react'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../firebase/config'


export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const docRef = doc(db, collection, id)
        getDoc(docRef)
            .then((res) => {
                if (res.exists()) {
                    setDocument({id: res.id, ...res.data()})
                } else {
                    setError('No existe documento')
                }
            })
            .catch(err => setError(err.message))
    }, [collection, id])

    return {document, error}

}