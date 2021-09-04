import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
};

const center = {
  lat: 51.237658277924695, 
  lng: 6.790453249906819
};

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
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)