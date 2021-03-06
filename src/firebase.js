import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD9gRlpRy5Mm_tal3RoSYLjqmAQFO-ytvo',
  authDomain: 'facebook-63b89.firebaseapp.com',
  databaseURL: 'https://facebook-63b89.firebaseio.com',
  projectId: 'facebook-63b89',
  storageBucket: 'facebook-63b89.appspot.com',
  messagingSenderId: '1064675516080',
  appId: '1:1064675516080:web:62638f67b5765e46c46575',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

export { db, auth, storage, provider }
