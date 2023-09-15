import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';
import { FaSearch, FaStar, FaPlus } from 'react-icons/fa';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import product from '../../../models/product';
import FallPlus from '../FallPlus/FallPlus';
import * as productsApi from '../../utilities/products-api';
function NavBar({
	favoriteCount,
	setShowWishList,
	showWishList,
	itemCount,
	setShowCart,
	showFallMart,
	setShowFallMart,
	searchResults,
	setSearchResults
}) {
	const [searchValue, setSearchValue] = useState('');
	const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// state to store search results

	const navigate = useNavigate();
	const handleSearch = async (evt) => {
		try {
			// Call your searchProducts function or API request here
			const response = await productsApi.getAllProducts();
			const searchProducts = response.filter((product) =>
				product.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
			);
			setSearchResults(searchProducts);
			navigate('/search');
			setSearchValue('');
		} catch (error) {
			console.error('Error searching for products:', error);
		}
	};

	useEffect(() => {
		const userIsLoggedIn = localStorage.getItem('authToken') !== null;
		setIsLoggedIn(userIsLoggedIn);
		console.log('isLoggedIn:', userIsLoggedIn);
	}, []);

	const handleLogOut = () => {
		localStorage.removeItem('authToken');
		setIsLoggedIn(false);
		console.log('Logged out');
	};

	const handleSignInClick = () => {
		setIsSignInModalOpen(true); // Open the modal when the button is clicked
	};
	const handleCloseModal = (evt) => {
		setIsSignInModalOpen(false); // Close the modal
	};

	const handleCartClick = () => {
		navigate('/checkout');
	};

	const handlePlusClick = () => {
		setShowFallMart(!showFallMart);
	};

	const handleUserInput = (evt) => {
		setSearchValue(evt.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
		  handleSearch(); // Trigger search when Enter key is pressed
		}
	  };

	  
	return (
		<>
			<nav className={styles.header_core}>
				{/* main logo */}
				<div className={styles.logo_core}>
					<Link to="/" className={styles.logo_core}>
						<img src="https://i.imgur.com/Hbvi85m.png" alt="" />
					</Link>
				</div>
				{/* Search box */}
				<div className={styles.search_container}>
					<input
						className={styles.header_searchInput}
						type="text"
						placeholder="Search everything at Fallmart online and in store"
						value={searchValue}
						onChange={handleUserInput}
						onKeyDown={handleKeyDown}
					/>
					<button className={styles.search_button} onClick={handleSearch}>
						<FaSearch />
					</button>
				</div>
				{/* 4 links to the right */}
				<div className={styles.right_core}>
					{isLoggedIn && (
						<div className={styles.orders}>
							<a href="/history"> Orders </a>
							<span> &nbsp; </span>
						</div>
					)}
					
					<div className={styles.humanicon}>
						<img
							src="https://i.imgur.com/l3cX5Ev.png"
							alt=""
							width="23"
							height="23"
						/>
					</div>
					<div className={styles.location}>
						<img
							src="https://i.imgur.com/gXCgwJG.jpg"
							alt=""
							width="30"
							height="30"
						/>
					</div>
					{isLoggedIn && (
						<div
							className={styles.favorites}
							onClick={() => {
								setShowWishList();
							}}
						>
							<div className={styles.favorite_icon_container}>
								{favoriteCount > 0 && (
									<span className={styles.favorite_count}>{favoriteCount}</span>
								)}
								<img
									src="https://i.imgur.com/UpoCDeP.png"
									alt=""
									width="20"
									height="20"
								/>
							</div>
						</div>
					)}
					<div className={styles.cart} onClick={handleCartClick}>
						{itemCount > 0 && (
							<span className={styles.item_count}>{itemCount}</span>
						)}
						<img
							src="https://i.imgur.com/TWI8Zuk.png"
							alt=""
							width="20"
							height="20"
						/>
					</div>
					{isLoggedIn && (
						<div className={styles.member} onClick={handlePlusClick}>
							<FaPlus />
						</div>
					)}
					<div className={styles.account}>
						{isLoggedIn ? (
							<button className={styles.signbutton} onClick={handleLogOut}>
								Log Out
							</button>
						) : (
							<button className={styles.signbutton} onClick={handleSignInClick}>
								Sign In
							</button>
						)}
					</div>
				</div>
				
				{/* Modal */}
				{isSignInModalOpen && (
					<div className={styles.modalOverlay}>
						<div className={styles.modalContent}>
							<span className={styles.close} onClick={handleCloseModal}>
								&times;
							</span>
							<SignUpForm
								closeModal={handleCloseModal}
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
						</div>
					</div>
				)}
			</nav>
			{showFallMart && <FallPlus />}
		</>
	);
}
export default NavBar;
