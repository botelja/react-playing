import React from 'react'

function RandomColor({color, handleClick, colors}) {
    return (
        <div>
           <p 
            style={{color: `#${color}`}}
            onClick={handleClick}
            >
                Hello World
            </p>
            { colors.length > 0 ?
                <p>previous text colors:</p>
                :
                ''
            }
            <ul>
                {colors.map(single => (
                    <li style={{color: `#${single}`}} key={single}>{single}</li>
                ))}
            </ul> 
        </div>
    )
}

export default RandomColor
