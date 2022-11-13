
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MyMapComponent } from './components/Map'
import React, { useState, useRef, useEffect } from 'react';


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