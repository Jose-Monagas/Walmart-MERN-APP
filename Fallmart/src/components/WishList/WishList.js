import React, { useEffect, useState } from 'react';
import * as wishlistApi from '../../utilities/wishlists-api';
import ProductTile from '../ProductTile/ProductTile';

export default function Wishlist() {
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
		<div>
			<h2>My Wishlist</h2>
			{isLoading ? (
				<p>Loading...</p>
			) : favoriteProducts.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				<div>
					{favoriteProducts.map((product) => (
						<ProductTile key={product._id} product={product} />
					))}
				</div>
			)}
		</div>
	);
}
