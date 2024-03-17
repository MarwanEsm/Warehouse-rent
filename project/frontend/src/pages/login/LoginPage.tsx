import React from "react"
import WelcomeMessage from "../../layout/welcomeMessage/WelcomeMessage"
import RegistrationForm from "../../layout/registrationForm/RegistrationForm"

interface LoginPageProps { }

const LoginPage: React.FC<LoginPageProps> = () =>
    <RegistrationForm />


export default LoginPage