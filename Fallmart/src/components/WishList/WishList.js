import React, { useEffect, useState } from 'react';
import * as wishlistApi from '../../utilities/wishlists-api';
import ProductTile from '../ProductTile/ProductTile';
import styles from './WishList.module.scss';
export default function WishList({ setShowWishList }) {
	const [favoriteProducts, setFavoriteProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchFavoriteProducts() {
			try {
				const favoriteProductsData = await wishlistApi.viewFavoriteProducts();
				setFavoriteProducts(favoriteProductsData);
				setIsLoading(false);
			} catch (error) {
				console.log('error', error);
			}
		}
		fetchFavoriteProducts();
	}, []);

	return (
		<div className={styles.wishlistcontainer}>
			<h2>My Wishlist</h2>
			<button
				onClick={() => {
					setShowWishList();
				}}
			>
				Exit
			</button>
			{isLoading ? (
				<p>Loading...</p>
			) : favoriteProducts.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				<div className={styles.productList}>
					{favoriteProducts.map((product) => (
						<ProductTile key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
}
