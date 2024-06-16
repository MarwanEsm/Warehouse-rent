import React from "react";
import Headline from "../../elements/headline/Headline";
import Button from "../../elements/button/Button";
import styles from "./WelcomeMessage.module.scss"

interface WelcomeMessageProps { }
const WelcomeMessage: React.FC<WelcomeMessageProps> = () => {

    return <div className={styles.welcomeMessage_container}>
        <Headline size={4} character="!">Welcome Back</Headline>
        <p>Enter your personal details and check out the offers</p>
        <Button onClick={() => console.log('switch to login')
        }>Login</Button>

    </div>
}

export default WelcomeMessage