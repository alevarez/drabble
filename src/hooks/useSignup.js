import {useState} from 'react'

import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

import {useAuthContext} from './useAuthContext'

export const useSignup = () => {

    const {dispatch} = useAuthContext()
    const [error, setError] = useState(null)

    const signup = (email, password, displayName) => {
        setError(null)

        createUserWithEmailAndPassword(auth ,email, password)
            .then(res => {
                if (res.user) {
                    updateProfile(res.user, {displayName: displayName})
                        .then(user => console.log(user))
                        .catch(e => console.log(e))
                }
                dispatch({type: 'LOGIN', payload: res.user})
            })
            .catch(err => {
                setError(err.message)
            })

    }

    return {error, signup}

}