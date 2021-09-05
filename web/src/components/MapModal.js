import React from "react";

const MapModal = () => {

    return(
        <div style={{
            position: "absolute",
            bottom: 60,
            left: 40,
            width: "25%",
            height: "30%",
            backgroundColor: "rgba(69,69,69, .69)",
            borderRadius: 20,
        }}>
            <h3 style={style}>Necessary Goods Suply</h3>
            <p style={style} >Foot (kcal/d):</p>
            <p style={style} >Water (l/d)</p>

        </div>
    )
}

const style = {
    textShadow: "0px 0px 1px #000"
}

export default MapModal