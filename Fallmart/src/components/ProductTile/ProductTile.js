import React, { useEffect, useState } from 'react';
import styles from './ProductTile.module.scss';
import * as wishlistApi from '../../utilities/wishlists-api';
import * as ordersApi from '../../utilities/orders-api';
function ProductTile({
	product,
	setFavoriteCount,
	favoriteCount,
	setItemCount,
	itemCount
}) {
	const [isFavorite, setIsFavorite] = useState(false);
	const [wishlistId, setWishlistId] = useState(null);
	const [itemId, setItemId] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		async function fetchWishlistId() {
			try {
				const wishlist = await wishlistApi.createWishlist();
				setWishlistId(wishlist._id);
				setIsLoading(false);
			} catch (error) {
				console.log('Error creating wishlist', error);
				setIsLoading(false);
			}
		}
		fetchWishlistId();
	}, []);

	const toggleFavorite = async (evt) => {
		if (!wishlistId || isLoading) {
			return;
		}
		setIsFavorite(!isFavorite);
		if (!isFavorite) {
			await wishlistApi.addProductToWishlist(wishlistId, product._id);
			setFavoriteCount(favoriteCount + 1);
		} else {
			await wishlistApi.removeProductFromWishlist(wishlistId, product._id);
			setFavoriteCount(favoriteCount - 1);
		}
	};

	const handleAddToCart = async () => {
		try {
			const cart = await ordersApi.getCart();
			const existingItem = cart.cartItems.find((item) => {
				item.item._id === product._id;
			});
			if (existingItem) {
				await ordersApi.setItemQtyInCart(product._id, existingItem.qty + 1);
			} else {
				await ordersApi.addItemToCart(product._id);
			}
			setItemCount(itemCount + 1);
		} catch (error) {
			console.log('Error adding item to cart:', error);
		}
	};
	return (
		<div className={styles.product_tile}>
			<div className={styles.favorite_button} onClick={toggleFavorite}>
				{isFavorite ? '❤️' : '🤍'}
			</div>

			<h3 className={styles.product_name}>{product.name}</h3>
			<img
				src={product.image}
				height={'110px'}
				width={'100px'}
				alt={product.name}
			/>
			<h4 className={styles.product_price}>${product.price}</h4>
			<h4 className={styles.product_sold}>Sold by: {product.manufacturer}</h4>
			<button className={styles.cart_button} onClick={handleAddToCart}>
				ADD TO CART
			</button>
		</div>
	);
}
export default ProductTile;
