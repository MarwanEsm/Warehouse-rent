import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from "../../assets/lottieAnimation/Loading.json"

const LoadingAnimation = () => {
    return <Lottie animationData={loadingAnimation}
        style={{ height: 200, width: 200, display: "inline-block" }}
    />;
}
export default LoadingAnimation