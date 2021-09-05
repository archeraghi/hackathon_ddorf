import React, {useState }from 'react'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

import daily_need from "../data/daily_need.json"
import bezirke from "../data/bezirke.json"
import MapModal from './MapModal';


const containerStyle = {
    position: "absolute",
    width: "100%",
    height: "90%",
    top: "10%"
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
  const [modal, setModal] = useState(false)

  const Polygons = bezirke.map(element => {
    return(
      <Polygon 
        path={element.data}
        key={element.bezirk}
        options= {active===element.bezirk? options_selected: options} 
        onClick={() => {
          setActive(element.bezirk)
          setModal(true)}}
        />
    )

  })

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1PSLKAEjhsNPMpmY72mQnpULpgB0EcEQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          zoomControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          mapTypeId: "satellite"
        }}
        center={center}
        onClick={()=> {
          setModal(false)
          setActive(null)
        }}
        zoom={13}
      >
        {Polygons}
        {modal? <MapModal bezirk={active} data={daily_need[active]}/> : null} 
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)