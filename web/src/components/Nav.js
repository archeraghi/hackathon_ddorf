import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return(
        <div style={{
            position: "absolute",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            height: "10%",
            width: "100%",
            top: "0",
            zIndex: 20,
            backgroundColor: "#fff"
        }}>
            <Link to="/" style={noTextDec}>
                <div style={{
                    position: "relative",
                    width: "50px",
                    height: "50px",
                    margin: "0 25px",
                    borderRadius: "25px",
                    backgroundColor: "#000"

                }}/>
            </Link>
            <Link to="/map" style={noTextDec}>
                <div style={navContainerStyle}>Map</div>
            </Link>
            <Link to= "/teams" style={noTextDec}>
                <div style={navContainerStyle}>Teams</div>
            </Link>
            <Link to ="/supplys" style={noTextDec}>
                <div style={navContainerStyle}>Supply</div>
            </Link>
        </div>
    )    
}

const navContainerStyle = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    padding: "0 20px",
    margin: "20px",
    backgroundColor: "#000",
    color: "#fff",

}

const noTextDec = {
    textDecoration: "none"
}
export default Nav