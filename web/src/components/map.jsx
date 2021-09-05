import React, {useState, createContext, useContext, Children }from 'react'
import { GoogleMap, LoadScript, Polygon, Marker } from '@react-google-maps/api';

import { GlobalContextProvider } from './GlobalContex';


import daily_need from "../data/daily_need.json"
import bezirke from "../data/bezirke.json"
import MapModal from './MapModal';


const containerStyle = {
    position: "absolute",
    width: "100%",
    height: "93%",
    top: "7%"
};

const center = {
  lat: 51.237658277924695, 
  lng: 6.790453249906819
};

const options = {
  fillColor: "#000",
  fillOpacity: 0.4,
  strokeColor: "#fff",
  strokeOpacity: 0.7,
  strokeWeight: 1,
  zIndex: 1
}

const options_selected = {
  fillColor: "#fff",
  fillOpacity: 0.5,
  strokeColor: "#fff",
  strokeOpacity: 0.7,
  strokeWeight: 2,
  zIndex: 2,
}

const headingStyle = {
  position: "absolute",
  top: 110,
  right: 50,
  zIndex: 500,
  color: "#fff",
  textShadow: "0 0 3px #000",
  fontSize: "35px",
  fontWeight: "bold"
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
  const places = []

  // const Marker = places.map( element => {
  //   <Marker
  //     position={{lat:element.latitude, lng:element.longitude}} 
  //     />
  // })


  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA1PSLKAEjhsNPMpmY72mQnpULpgB0EcEQ"
    >
    <h1 style={headingStyle}>DÜSSELDORF CRISIS MAP </h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          disableDefaultUI: true,
          mapTypeId: "satellite"
        }}
        center={center}
        onClick={()=> {
          setModal(false)
          setActive(null)
        }}
        zoom={11.5}
      >
        <Marker  
          position={{lat:51.23295680777698, lng:6.788697597121482}}
          />
        {Polygons}
        <GlobalContextProvider>
          {modal? <MapModal bezirk={active} data={daily_need[active]}/> : null} 
        </GlobalContextProvider>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)