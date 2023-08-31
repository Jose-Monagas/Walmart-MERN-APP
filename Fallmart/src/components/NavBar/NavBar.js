import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { FaSearch } from 'react-icons/fa';

function NavBar() {
	const [searchValue, setSearchValue] = useState('');

	const handleSearch = () => {
		console.log('Performing search:', searchValue);
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
					<button className={styles.signbutton}> Sign In</button>
				</div>
				<div className={styles.humanicon}>
					<img
						src="https://i.imgur.com/l3cX5Ev.png"
						alt=""
						width="30"
						height="30"
					/>
				</div>
				<div className={styles.location}>
					<img
						src="https://i.imgur.com/gXCgwJG.jpg"
						alt=""
						width="40"
						height="40"
					/>
				</div>
				<div className={styles.favorites}>
					<img
						src="https://i.imgur.com/UpoCDeP.png"
						alt=""
						width="30"
						height="30"
					/>
				</div>
				<div className={styles.cart}>
					<img
						src="https://i.imgur.com/TWI8Zuk.png"
						alt=""
						width="30"
						height="30"
					/>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
