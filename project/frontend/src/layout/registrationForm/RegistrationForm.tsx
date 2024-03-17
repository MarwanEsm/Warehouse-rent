import Button from "../../components/elements/button/Button"

interface RegistrationFormProps { }
const RegistrationForm = () => {

    return <div className="registration_form_container">
        <h4>Create Account</h4>
        <input type="text" required placeholder="Name" />
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <Button onClick={() => console.log('Sign up')}>Sign up</Button>
    </div>
}

export default RegistrationForm