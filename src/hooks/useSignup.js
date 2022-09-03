import {useState} from 'react'

import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export const useSignup = () => {

    const [error, setError] = useState(null)

    const signup = (email, password, displayName) => {
        setError(null)

        createUserWithEmailAndPassword(auth ,email, password)

    }

    return {error, signup}

}