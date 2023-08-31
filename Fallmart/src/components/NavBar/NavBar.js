import React from 'react';
import styles from './NavBar.module.scss';
import {FaSearch} from "react-icons/fa"

function NavBar() {
	return (
		<nav className={styles.header_core}>
			<div className={styles.left_core}>
				<input
					className={styles.header_searchInput}
					type="text"
					placeholder="What can we help you find?"
				/>
				<FaSearch className={styles.search_icon} />
			</div>
			<img
				className={styles.logomiddle_core}
				src="https://i.imgur.com/xgA0d20.png"
				alt=""
			/>
			<div className={styles.right_core}>
				<div className={styles.account}>
					<a href="/account/order-tracking">Orders</a>
					<span> & </span>
					<button className={styles.signbutton}>Sign In</button>
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
