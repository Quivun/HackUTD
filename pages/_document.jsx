import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  const apiKey = 'AIzaSyBmxW35uADcFieZsrW4fBjNwUJTLNSTPfU';
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <script src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`} async></script>
        <script src={'https://maps.google.com/maps/api/js?sensor=false'} async></script> */}
      </body>
    </Html>
  )
}