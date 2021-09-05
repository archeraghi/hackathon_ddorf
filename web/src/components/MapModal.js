import React, {useState} from "react";

import { useGlobalContext } from "./GlobalContex";

const MapModal = (props) => {

    const {year, setYear} = useGlobalContext()

    const [scope, setScope] = useState("day")

    const food = () => {
        if(scope==="day") return props.data[year].food 
        if(scope==="week") return props.data[year].food * 7
        if(scope==="month") return props.data[year].food * 30
    }

    const water = () => {
        if(scope==="day") return props.data[year].water 
        if(scope==="week") return props.data[year].water * 7
        if(scope==="month") return props.data[year].water * 30
    }


    const handleChange = (event) => {
        setYear(event.target.value)
    }

    return(
        <div style={modalContainer}>
            <img src="https://www.duesseldorf-tourismus.de/_Resources/Persistent/6cc1c16e48b61568b66d07109ce90802df150d6c/luftaufnahme-9231x4827-1200x627.jpg" alt="Düsseldorf" 
            style={imgStyle}/>
            <h2 style={headingStyle}>Bezirk {props.bezirk}</h2>
            <div style={{display: "flex", flexWrap: "wrap",  

                }}>

                <div id="day" onClick={event =>setScope(event.target.id)} className={scope==="day"?"optionStyle a": "optionStyle"}>Day</div>
                <div id="week" onClick={event =>setScope(event.target.id)} className={scope==="week"?"optionStyle a": "optionStyle"}>Week</div>
                <div id="month" onClick={event =>setScope(event.target.id)} className={scope==="month"?"optionStyle a": "optionStyle"}>Month</div>
            </div>
            <div className="contentContainer">
                <div className="tableContainer">
                <h4>Population:</h4>
                <table>
                    <tr>
                        <td className="name">total:</td>
                        <td>{props.data[year].population}</td>
                    </tr>
                    <tr>
                        <td className="name">dencity (p/km²)</td>
                        <td>{props.data[year].pop_density}</td>
                    </tr>
                    <tr>
                        <td className="name">% in vulnerable age (0-18/65+):</td>
                        <td>{props.data[year].ratio_vulnerable_age.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="name">avg. houshold size:</td>
                        <td>{props.data[year].mean_household_size}</td>
                    </tr>
                </table>
                </div>
                <div className="tableContainer">
                <h4 >Foot (kcal * 1000):</h4>
                <table>
                    <tr>
                        <td className="name">total:</td>
                        <td>{Math.floor(food())}</td>
                    </tr>
                    <tr>
                        <td className="name">from Protein:</td>
                        <td>{Math.floor(food() * 0.17)}</td>
                    </tr>
                    <tr>
                        <td className="name">from Fat:</td>
                        <td>{Math.floor(food()* 0.12)}</td>
                    </tr>
                </table>
                </div>
                <div className="tableContainer">
                <h4 >Water (m³): </h4>
                <table>
                    <tr>
                        <td className="name">drinkable:</td>
                        <td>{water().toFixed(2)}</td>
                    </tr>
                </table>
                </div>
                <div>
                    <input className="range" type="range" min="2020" max="2035" value={year} step="1" onChange={handleChange}></input>
                    <select  value={year} onChange={handleChange}>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                    </select>
            </div>
            </div>

        </div>
    )
}

const modalContainer = {
    position: "absolute",
    top: 50,
    left: 50,
    width: "600px",
    height: "850px",
    padding: "0px 0px 50px",
    backgroundColor: "rgba(245,245,245, 0.8)",
    borderRadius: 20,    
    textAlign: "left"
}

const imgStyle = {
    position: "relative",
    width:"100%",
    height: "300px",
    borderRadius: "20px 20px 0 0",
    top: 0,
}

const headingStyle = {
    position: "absolute",
    fontSize: "40px",
    color: "#fff",
    textShadow: "0 0 5px #000",
    top: "190px",
    left: "30px"

}

const style = {
    textShadow: "0px 0px 1px #000",
    margin: "0"
}

const optionStyle = {
    // width: "33.3%",
    // height: "50px",
    // backgroundColor: "#B3B3B3",
    // color: "#fff",
    // fontWeight: "bold"
}
const optionStyle_a = {
    // width: "33.3%",
    // margin: "15px 0",
    // backgroundColor: "rgba(5, 9, 255, .6)" ,
}

export default MapModal