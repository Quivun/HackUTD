import { Wrapper } from "@googlemaps/react-wrapper";
import { useRef, useEffect }  from 'react';

const render = (status) => {
     return <h1>{status}</h1>;
};

export function MyMapComponent({
     center,
     zoom,
   }) {
     const ref = useRef();
   

   
     return (
          <Wrapper apiKey={"AIzaSyBmxW35uADcFieZsrW4fBjNwUJTLNSTPfU"} render={render}>
               <div ref={ref} id="map" />
          </Wrapper>
     );
}
