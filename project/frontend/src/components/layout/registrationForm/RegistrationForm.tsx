import Button from "../../elements/button/Button"
import styles from "./RegistrationForm.module.scss"

const RegistrationForm = () => {

    return <div className={styles.registration_form_container}>
        <h4>Create Account</h4>
        <input type="text" required placeholder="Name" />
        <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <Button onClick={() => console.log('Sign up')}>Sign up</Button>
    </div>
}

export default RegistrationForm