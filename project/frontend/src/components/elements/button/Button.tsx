import React, { ReactNode } from 'react'
import styles from "./Button.module.scss"


interface ButtonProps {
    children: ReactNode,
    onClick: () => void

}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {

    return <button className={styles.button} onClick={onClick}>{children}</button>
}

export default Button