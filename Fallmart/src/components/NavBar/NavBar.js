import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { FaSearch } from 'react-icons/fa';
import SignUpForm from '../SignUpForm/SignUpForm';

function NavBar() {
	const [searchValue, setSearchValue] = useState('');
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);


	const handleSearch = () => {
		console.log('Performing search:', searchValue);
	};

	const handleSignInClick = () => {
		setIsSignInModalOpen(true); // Open the modal when the button is clicked
	};

	const handleCloseModal = () => {
		setIsSignInModalOpen(false); // Close the modal
	};

	return (
		<nav className={styles.header_core}>
			<div className={styles.left_core}>
				<div className={styles.search_container}>
					<input
						className={styles.header_searchInput}
						type="text"
						placeholder="What can we help you find?"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button className={styles.search_button} onClick={handleSearch}>
						<FaSearch />
					</button>
				</div>
			</div>
			<div className={styles.logomiddle_core}>
				<img src="https://i.imgur.com/xgA0d20.png" alt="" />
			</div>
			<div className={styles.right_core}>
				<div className={styles.account}>
					<a href="/account/order-tracking"> Orders </a>
					<span> & </span>
					<button className={styles.signbutton} onClick={handleSignInClick}>
						Sign In
					</button>
				</div>
				<div className={styles.location}>
					{/* Your location icon */}
					<img
						src="https://i.imgur.com/gXCgwJG.jpg"
						alt=""
						width="30"
						height="30"
					/>
				</div>
				<div className={styles.humanicon}>
					{/* Your human icon */}
					<img
						src="https://i.imgur.com/l3cX5Ev.png"
						alt=""
						width="30"
						height="30"
					/>
				</div>
				<div className={styles.favorites}>
					{/* Your favorites icon */}
					<img
						src="https://i.imgur.com/UpoCDeP.png"
						alt=""
						width="22"
						height="22"
					/>
				</div>
				<div className={styles.cart}>
					{/* Your cart icon */}
					<img
						src="https://i.imgur.com/TWI8Zuk.png"
						alt=""
						width="22"
						height="22"
					/>
				</div>
			</div>
			{/* Modal */}
			{isSignInModalOpen && (
				<div className={styles.modalOverlay}>
					<div className={styles.modalContent}>
						<span className={styles.close} onClick={handleCloseModal}>
							&times;
						</span>
						<SignUpForm closeModal={handleCloseModal} />
					</div>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
