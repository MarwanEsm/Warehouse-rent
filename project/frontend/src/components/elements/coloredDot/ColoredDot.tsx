import React, { ReactNode } from "react";
import styles from "./ColoredDot.module.scss"

interface ColoredDotProps {
    children: ReactNode,
    character: string,
    size: number
}


const ColoredDot: React.FC<ColoredDotProps> = ({ children, size, character }) =>
    <>
        {Array.isArray(children) ? children[0] : children}
        <span className={size === 1 || size === 2 ? `${styles.green}` : `${styles.blue}`} >
            {character}
        </span>
        {Array.isArray(children) && children.length >= 1 && children.slice(1)}
    </>



export default ColoredDot