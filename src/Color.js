import React from 'react'

function Color({color}) {
    const mystyles = {
        backgroundColor: color,
        height: "100px",
        width: "200px",
        border: "2px solid black",
        justifyContent: "center",
        textAlign: "center",
        
    }
    return (
        <div style={mystyles}>
            {color}
        </div>
    )
}

export default Color
