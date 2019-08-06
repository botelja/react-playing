import React from 'react'

function RandomColor({color, handleClick}) {

    console.log(color)

    return (
        <div>
           <p 
            style={{color: `#${color}`}}
            onClick={handleClick}
            >
                Hello World {color}
            </p> 
        </div>
    )
}

export default RandomColor
