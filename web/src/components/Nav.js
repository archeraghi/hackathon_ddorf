import React from "react";

const Nav = () => {


    const path =window.location.pathname


    return(
        <div style={NavStyle}>
            <a href="/" style={noTextDec}>
                <div style={logoStyle}/>
            </a>
            <a href="/map" style={noTextDec}>
                <div id="/map" style={path === "/map"?navContainerStyle_a: navContainerStyle}>Map</div>
            </a>
            {/* <a href= "/teams" style={noTextDec}>
                <div id="/teams" style={path === "/teams"?navContainerStyle_a: navContainerStyle}>Teams</div>
            </a>
            <a href ="/supply" style={noTextDec}>
                <div id="/supply" style={path === "/supply"?navContainerStyle_a: navContainerStyle}>Supply</div>
            </a> */}
            <a href ="/report" style={noTextDec}>
                <div id="/report" style={path === "/report"?navContainerStyle_a: navContainerStyle}>Report</div>
            </a>
        </div>
    )    
}

const NavStyle = {
    position: "absolute",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    height: "100.4333px",
    width: "100%",
    hrefp: "0",
    zIndex: 20,
    backgroundColor: "#f5f5f5",
    boxShadow: "inset 0px -5px #B3B3B3"
}

const logoStyle = {
    position: "relative",
    width: "70px",
    height: "70px",
    margin: "0 25px",
    borderRadius: "40px",
    backgroundColor: "#cccccc" 
}
const navContainerStyle_a = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    padding: "0 20px",
    margin: "20px",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold"

}
const navContainerStyle = {
    display: "flex",
    alignItems: "center",
    height: "40px",
    padding: "0 20px",
    margin: "20px",
    backgroundColor: "#b3b3b3",
    color: "#fff",
    fontSize: "20px",
    fontWeight: "bold"

}

const noTextDec = {
    textDecoration: "none"
}
export default Nav