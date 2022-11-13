import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState }  from 'react';
import styles from '../../styles/Neibur.module.css';
// import { MapContainer, TileLayer } from 'react-leaflet'

// const render = (status) => {
//      return <h1>{status}</h1>;
// };

export default function MyMapComponent() {
     // const ref = useRef(null);
     // const [map, setMap] = useState();
     
     // useEffect(() => {
     //   if (ref.current && !map) {
     //     setMap(new window.google.maps.Map(ref.current, {}));
     //   }
     // }, [ref, map]);

     useEffect(() => {
          console.log('what on earth is happening');
     });
   
   const position = [51.505, -0.09]
   let x = 0
   let y = 0
   let z = 0
   let s = 'what'
     return (
          <div>
               {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution={<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>}
                    url={`https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`}
                    />
                    <Marker position={position}>
                         <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                         </Popup>
                    </Marker>
               </MapContainer>
                */}
          </div>
     );
}
