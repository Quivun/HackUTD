import styles from '../styles/Neibur.module.css'
import { useMemo, useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import MyMapComponent from './components/Map';
import EventItem from './components/EventItem';

// let map;
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: -25.344, lng: 131.031 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     });
// }


function Neibur() {
   const [listOfEvents, setEvents] = useState({'name':'Something', 'description':'What is going on'});
   let x = 0;

    const createEvent = () => {
        setEvents(listOfEvents => [...listOfEvents, {'name':'Title'+x, 'description':'Description'+x++}]);
    };

    useEffect(() => {
        console.log("Does this work?");
    }, [listOfEvents]);

    return (<>
    <button className='button' onClick={() => createEvent()} >Add Event!</button>
    <div className={styles.sidebar}>
        {Object.values(listOfEvents).map((item, i) => (
            <EventItem key={i} title={item.name} description={item.description}/>
        ))}
        <EventItem title="Title" description="description"/>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

      </div>

      <MyMapComponent/>

</>
);
}


export default Neibur;