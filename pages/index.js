
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from 'react';

import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCQpfZaKUk6-Or4vT85ehfPRsXuzkUaJk",
  authDomain: "utdhackfirebase.firebaseapp.com",
  projectId: "utdhackfirebase",
  storageBucket: "utdhackfirebase.appspot.com",
  messagingSenderId: "984684431161",
  appId: "1:984684431161:web:7d96aca86ad52e6f024ae8",
  measurementId: "G-KP9G2PNWRH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getClient(db) {
  const clientCol = collection(db, 'clientListings');
  const clientSnapshot = await getDocs(clientCol);
  const clientList = clientSnapshot.docs.map(doc => doc.data());
  return clientList;
}





function Home() {
  const [zipCode,setzipCode]=useState('')
  const [error,setError]=useState(false)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(zipCode.length < 5 || zipCode.length > 5){
        setError(true)
    }
    if(zipCode)
    {
    console.log("zipcode: ",zipCode)
    }
}

return(
  <>
     <form onSubmit={handleSubmit}>
         <div> 
             <input placeholder="enter zipcode" onChange={e=>setzipCode(e.target.value)} />
             <button><img src="image.png" alt="SUBMIT" /></button>
             </div>
         {(error&&zipCode.length<5 || error&&zipCode.length>5)?
         <label>zipcode is 5 numbers long</label>:""}
         <div>
         </div>
     </form>
     
  </>
);
}

export default Home;