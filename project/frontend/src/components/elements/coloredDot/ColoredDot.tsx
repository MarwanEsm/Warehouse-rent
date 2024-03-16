import React, { ReactNode } from "react";
import './ColoredDot.css'

interface ColoredDotProps {
    children: ReactNode,
    character: string
}


const ColoredDot: React.FC<ColoredDotProps> = ({ children, character }) => {




    return <>
        {Array.isArray(children) ? children[0] : children}
        <span className='green' >
            {character}
        </span>
        {Array.isArray(children) && children.length >= 1 && children.slice(1)}
    </>
}


export default ColoredDot