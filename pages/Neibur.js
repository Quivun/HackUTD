import styles from '../styles/Neibur.module.css'
import { useMemo, useRef, useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
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
    <div className={styles.sidebar_header}>
        <button onClick={() => createEvent()} className={styles.sidebar_eventButton}>Add Event!</button>
    </div>
    <div className={styles.sidebar_eventList}>
        {Object.values(listOfEvents).map((item, i) => (
            <EventItem key={i} title={item.name} description={item.description}/>
        ))}
    </div>
</>
);
}


export default Neibur;