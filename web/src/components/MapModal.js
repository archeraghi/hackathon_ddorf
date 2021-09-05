import React, {useState} from "react";

const MapModal = (props) => {

    const [scope, setScope] = useState("day")

    const food = () => {
        if(scope==="day") return props.data[0] 
        if(scope==="week") return props.data[0] * 7
        if(scope==="month") return props.data[0] * 30
    }

    const water = () => {
        if(scope==="day") return props.data[1] 
        if(scope==="week") return props.data[1] * 7
        if(scope==="month") return props.data[1] * 30
    }



    return(
        <div style={{
            position: "absolute",
            bottom: 60,
            left: 40,
            width: "25%",
            height: "auto",
            padding: "0px 0px 50px",
            backgroundColor: "rgba(169,169,169, .69)",
            borderRadius: 20,
        }}>
            <img src="https://www.duesseldorf-tourismus.de/_Resources/Persistent/6cc1c16e48b61568b66d07109ce90802df150d6c/luftaufnahme-9231x4827-1200x627.jpg" alt="Düsseldorf" 
            style={{
                width:"100%",
                borderRadius: "20px 20px 0 0",
                top: 0,
            }}/>
            <h2 style={style}>Bezirk {props.bezirk}</h2>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <div id="day" onClick={event =>setScope(event.target.id)} style={scope==="day"?style_2a: style_2}>Day</div>
                <div id="week" onClick={event =>setScope(event.target.id)} style={scope==="week"?style_2a: style_2}>Week</div>
                <div id="month" onClick={event =>setScope(event.target.id)} style={scope==="month"?style_2a: style_2}>Month</div>
            </div>
            <h4 style={style} >Foot (kcal): {Math.floor(food())}m</h4>
            <p style={style} >from Protein: {Math.floor(food() * 0.12)}m</p>
            <p style={style} >from Fat: {Math.floor(food() * 0.17)}m</p>
            <hr/>
            <h4 style={style} >Water (m³): {water().toFixed(2)}</h4>

        </div>
    )
}

const style = {
    textShadow: "0px 0px 1px #000",
    margin: "0"
}

const style_2 = {
    width: "33.3%",
    margin: "15px 0",
    backgroundColor: "rgba(69,69,69, .5)" 
}
const style_2a = {
    width: "33.3%",
    margin: "15px 0",
    backgroundColor: "rgba(5, 9, 255, .6)" 
}

export default MapModal