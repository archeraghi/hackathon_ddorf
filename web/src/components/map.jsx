import React from 'react'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

import { data } from '../polygons/test';


const containerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
};

const center = {
  lat: 51.237658277924695, 
  lng: 6.790453249906819
};


//  const data= [
//     {lng: 6.79947423091416, lat: 51.2258973117493},
//     {lng: 6.75569741981624, lat: 51.2560965026146},
//     {lng: 6.76857032377179, lat: 51.2295152570487},
//     {lng: 6.79947423091416, lat: 51.2258973117493}
//   ];


function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1PSLKAEjhsNPMpmY72mQnpULpgB0EcEQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Polygon 
          path={data}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)