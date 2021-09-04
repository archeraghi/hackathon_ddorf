import React, {useState }from 'react'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

import { data } from '../polygons/test';

const containerStyle = {
    position: "absolute",
    width: "100%",
    height: "90%",
};

const center = {
  lat: 51.237658277924695, 
  lng: 6.790453249906819
};

const options = {
  fillColor: "#000",
  fillOpacity: 0.4,
  strokeColor: "#000",
  strokeOpacity: 0.6,
  strokeWeight: 3
}

const options_selected = {
  fillColor: "#0509ff",
  fillOpacity: 0.5,
  strokeColor: "#0509ff",
  strokeOpacity: 0.7,
  strokeWeight: 7
}


function Map() {

  const [active, setActive] = useState(false)

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1PSLKAEjhsNPMpmY72mQnpULpgB0EcEQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onClick={()=> {
          setActive(false)
        }}
        zoom={13}
      >
        <Polygon 
          path={data}
          key={1}
          options= {active? options_selected: options} 
          onClick={() => {
            setActive(true)}}
          />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)