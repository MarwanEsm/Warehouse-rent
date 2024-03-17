import React from "react";
import Headline from "../../../components/elements/headline/Headline";

interface WelcomeMessageProps { }
const WelcomeMessage: React.FC<WelcomeMessageProps> = () => {

    return <div>
        <Headline size={3} character="!">Welcome Back</Headline>
        <p>Enter your personal details and check out the offers</p>

    </div>
}

export default WelcomeMessage