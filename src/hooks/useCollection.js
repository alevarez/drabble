
import {useState, useEffect} from 'react'
import {collection, onSnapshot} from 'firebase/firestore'

import {db} from '../firebase/config'

export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null)

    useEffect(() => {
        let ref = collection(db, c)

        const unsubscribe = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({id: doc.id, ...doc.data()})
            })

            setDocuments(results)
        })

        return () => unsubscribe()

    }, [c])

    return {documents}
}