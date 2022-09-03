import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzGIpvXv3M6UZ1n29jF6L6YSaQPmwswtg",
    authDomain: "boograff-789a0.firebaseapp.com",
    projectId: "boograff-789a0",
    storageBucket: "boograff-789a0.appspot.com",
    messagingSenderId: "20323403555",
    appId: "1:20323403555:web:7829cd0208e88aaf576e96"
}

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()


export {db, auth}