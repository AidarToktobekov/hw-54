import React, { PropsWithChildren, useState } from 'react';

interface Props extends PropsWithChildren{
    hasItem: boolean;
    clicked: boolean;
}

const BoardLog:React.FC<Props> = ({hasItem, clicked})=>{

    const treasure = ()=>{
        if (hasItem === true) {
            return(
                <div className='treasure'>o</div>
            )
        }
    }

    let [squareStyle, setSquareStyle] = useState(['square']);

    const openSquare = ()=>{   
        clicked = true;
    
        setSquareStyle(
            squareStyle = ['square', 'white-square']
        )
    }

    return(
        <div className={squareStyle.join(' ')} onClick={openSquare}>{treasure()}</div>
    )
}

export default BoardLog