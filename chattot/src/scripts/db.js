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
    }, [])
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
    apiKey: "AIzaSyCxnHdHGicbw16DmQfEbNVy7XD6ENprVNQ",
    authDomain: "chatter2021-2b8fb.firebaseapp.com",
    projectId: "chatter2021-2b8fb",
    storageBucket: "chatter2021-2b8fb.appspot.com",
    messagingSenderId: "778098356347",
    appId: "1:778098356347:web:c396b31d7a0a5c0c6c32de"
};

firebase.initializeApp(firebaseConfig)
store = firebase.firestore()