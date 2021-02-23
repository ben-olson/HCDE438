import {useState, useEffect} from 'react'
import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

let store
const coll = 'messages'

function useDB(room) {
    const [messages, setMessages] = useState([])

    function add(m) {
        setMessages(current => {
            const msgs = [m, ...current]
            msgs.sort((a,b)=> b.date.seconds - a.date.seconds)
            return msgs
        })
    }
    function remove(id) {
        setMessages(current=> current.filter(m=> m.id!==id))
    }
    
    useEffect(() => {
        const collection = room ? 
            store.collection(coll).where('room','==',room) :
            store.collection(coll)
        
        collection.onSnapshot(snap=> snap.docChanges().forEach(c=> {
            const {doc, type} = c
            if (type==='added') add({...doc.data(),id:doc.id})
            if (type==='removed') remove(doc.id)
        }))
    }, [room])
    return messages
}

const db = {}
db.send = function(msg) {
    return store.collection(coll).add(msg)
}
db.delete = function(id) {
    return store.collection(coll).doc(id).delete()
}

export { db, useDB }

const firebaseConfig = {
    apiKey: "AIzaSyCHVLRjXRfzpuwj4KRNcqN_rnP6drTVToE",
    authDomain: "chattot.firebaseapp.com",
    projectId: "chattot",
    storageBucket: "chattot.appspot.com",
    messagingSenderId: "637287877044",
    appId: "1:637287877044:web:1f2f53f109313a27fa8ae1",
    measurementId: "G-73GRQ0PKCM"
  };

firebase.initializeApp(firebaseConfig)
store = firebase.firestore()