import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: '',
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: '',
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...this.state };
            delete formData.confirm;
            delete formData.error;

            const user = await signUp(formData);

            this.props.setUser(user);
            this.props.closeModal();
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again ' });
        }
    };

    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    }
    handleSignUpClick = () => {
        const container = document.getElementById('container');
        container.classList.add(styles['right-panel-active']); // Use the class name from the module
    };

    handleSignInClick = () => {
        const container = document.getElementById('container');
        container.classList.remove(styles['right-panel-active']); // Use the class name from the module
    };


    render() {
        return (
            <div className={styles.main}>
                <span className={styles.close} onClick={this.props.closeModal}>
                    &times;
                </span>
                <div className={styles.container} id="container">
                    <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
                        <form action="#" onSubmit={this.handleSubmit}>
                            <h1>Create Account</h1>
                            <div className={styles['social-container']}>
                                <a href="#" className="social"><i className="fa-brands fa-facebook-f fa-fw"></i></a>
                                <a href="#" className="social"><i className="fa-brands fa-google-plus-g fa-fw"></i></a>
                                <a href="#" className="social"><i className="fa-brands fa-linkedin-in fa-fw"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" name="name" onChange={this.handleChange} />
                            <input type="email" placeholder="Email" name="email" onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                            <input type="phone" placeholder="Phone" name="phone" onChange={this.handleChange} />
                            <button onClick={this.handleSignUpClick}>Sign Up</button>
                        </form>
                    </div>
                    <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className={styles['social-container']}>
                                <a href="#" className="social"><i className="fa-brands fa-facebook-f fa-fw"></i></a>
                                <a href="#" className="social"><i className="fa-brands fa-google-plus-g fa-fw"></i></a>
                                <a href="#" className="social"><i className="fa-brands fa-linkedin-in fa-fw"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a onClick={""}>Forgot your password?</a>
                            <button onClick={this.handleSignInClick}>Sign In</button>
                        </form>
                    </div>
                    <div className={styles['overlay-container']}>
                        <div className={styles.overlay}>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className={styles.ghost} id="signIn" onClick={this.handleSignInClick}>Sign In</button>
                            </div>
                            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start the journey with us</p>
                                <button className={styles.ghost} id="signUp" onClick={this.handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}