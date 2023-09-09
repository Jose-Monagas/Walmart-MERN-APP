import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';
import { signUp, signIn } from '../../utilities/users-service';

export default class SignUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		signInEmail: '', // Added for sign-in
		signInPassword: '', // Added for sign-in
		error: ''
	};

	handleChange = (evt) => {
		const { name, value } = evt.target;
		this.setState({
			[name]: value,
			error: ''
		});
	};

	handleSignUp = async (evt) => {
		evt.preventDefault();
		const { name, email, password, confirmPassword } = this.state;
		try {
			const formData = { name, email, password };
			const user = await signUp(formData);
			console.log(user);
			//this.props.setUser(user);
			this.props.closeModal();
		} catch (error) {
			console.error(error); // Log the error for debugging
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	handleSignIn = async (evt) => {
		evt.preventDefault();
		const { signInEmail, signInPassword } = this.state;
		try {
			const formData = { email: signInEmail, password: signInPassword };
			const user = await signIn(formData);

			// Assuming signIn sets the authentication token in localStorage
			localStorage.setItem('authToken', user.authToken);

			console.log(user); // Verify that user data is correctly logged
			this.props.closeModal();

			// Update isLoggedIn state here
			console.log(this.props);
			this.props.setIsLoggedIn(true);
		} catch (error) {
			console.error(error); // Log the error for debugging
			this.setState({ error: 'Sign In Failed - Try Again' });
		}
	};

	// switching windows when clicking signin
	handleSignInClick = () => {
		this.setState({ confirmPassword: '' }); // Clear confirmPassword when switching panels
		const container = document.getElementById('container');
		container.classList.remove(styles['right-panel-active']);
	};
	// switching windows when clicking signup
	handleSignUpClick = () => {
		this.setState({ confirmPassword: '' }); // Clear confirmPassword when switching panels
		const container = document.getElementById('container');
		container.classList.add(styles['right-panel-active']);
	};

	componentDidMount() {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add('right-panel-active');
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove('right-panel-active');
		});
	}

	render() {
		const disable = this.state.password !== this.state.confirmPassword;
		return (
			<div className={styles.main}>
				<span className={styles.close} onClick={this.props.closeModal}>
					&times;
				</span>
				<div className={styles.container} id="container">
					<div
						className={`${styles['form-container']} ${styles['sign-up-container']}`}
					>
						<form action="#" onSubmit={this.handleSignUp}>
							<h1>Create Account</h1>
							<div className={styles['social-container']}>
								<a href="#" className="social">
									<i className="fa-brands fa-facebook-f fa-fw"></i>
								</a>
								<a href="#" className="social">
									<i className="fa-brands fa-google-plus-g fa-fw"></i>
								</a>
								<a href="#" className="social">
									<i className="fa-brands fa-linkedin-in fa-fw"></i>
								</a>
							</div>
							<span>or use your email for registration</span>
							<input
								type="text"
								placeholder="Name"
								value={this.state.name}
								name="name"
								onChange={this.handleChange}
								required
							/>
							<input
								type="email"
								placeholder="Email"
								value={this.state.email}
								name="email"
								onChange={this.handleChange}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<input
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								value={this.state.confirmPassword}
								onChange={this.handleChange}
								required
							/>
							<button
								type="submit"
								disabled={disable}
								onClick={this.handleSignUp}
								className={styles.modalButton}
							>
								Create Account
							</button>
						</form>
					</div>
					<div
						className={`${styles['form-container']} ${styles['sign-in-container']}`}
					>
						<form action="#" onSubmit={this.handleSignIn}>
							<h1>Sign in</h1>
							<div className={styles['social-container']}>
								<a href="#" className="social">
									<i className="fa-brands fa-facebook-f fa-fw"></i>
								</a>
								<a href="#" className="social">
									<i className="fa-brands fa-google-plus-g fa-fw"></i>
								</a>
								<a href="#" className="social">
									<i className="fa-brands fa-linkedin-in fa-fw"></i>
								</a>
							</div>
							<span>or use your account</span>
							<input
								type="email"
								placeholder="Email"
								value={this.state.signInEmail}
								name="signInEmail"
								onChange={this.handleChange}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								value={this.state.signInPassword}
								name="signInPassword"
								onChange={this.handleChange}
								required
							/>
							<a onClick={''}>Forgot your password?</a>
							<button
								onClick={this.handleSignIn}
								className={styles.modalButton}
							>
								Sign In
							</button>
						</form>
					</div>
					<div className={styles['overlay-container']}>
						<div className={styles.overlay}>
							<div
								className={`${styles['overlay-panel']} ${styles['overlay-left']}`}
							>
								<h1>Welcome Back!</h1>
								<p>
									To keep connected with us please login with your personal info
								</p>
								<button
									className={`${styles.modalButton} ${styles.ghost}`}
									id="signIn"
									onClick={this.handleSignInClick}
								>
									Sign In
								</button>
							</div>
							<div
								className={`${styles['overlay-panel']} ${styles['overlay-right']}`}
							>
								<h1>Hello, Friend!</h1>
								<p>Enter your personal details and start the journey with us</p>
								<button
									className={`${styles.modalButton} ${styles.ghost}`}
									id="signUp"
									onClick={this.handleSignUpClick}
								>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
