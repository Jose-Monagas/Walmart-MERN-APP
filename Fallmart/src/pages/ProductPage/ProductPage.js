import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import * as ordersApi from '../../utilities/orders-api';
import * as productsAPI from '../../utilities/products-api';
import * as wishlistApi from '../../utilities/wishlists-api';
import { useParams } from 'react-router-dom';

function ProductPage({ setFavoriteCount }) {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [isFavorite, setIsFavorite] = useState(false);
	const [wishlistId, setWishlistId] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getProduct() {
			try {
				const data = await productsAPI.getProductById(id);
				setProduct(data);
			} catch (error) {
				console.error('Error fetching product:', error);
				setProduct(null);
			}
		}
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
		getProduct();
	}, [id]);

	const toggleFavorite = async (evt) => {
		if (!wishlistId || isLoading) {
			return;
		}
		setIsFavorite((previousFavorite) => !previousFavorite);
		if (!isFavorite) {
			try {
				setFavoriteCount((prevFavoriteCount) => prevFavoriteCount + 1);
				await wishlistApi.addProductToWishlist(wishlistId, product._id);
			} catch (error) {
				console.log(error);
			}
		} else {
			setFavoriteCount((prevFavoriteCount) => prevFavoriteCount - 1);
			await wishlistApi.removeProductFromWishlist(wishlistId, product._id);
		}
	};

	const handleAddToCart = async () => {
		try {
			const cart = await ordersApi.getCart();
			const existingItem = cart.cartItems.find((item) => {
				item.item._id === product._id;
			});
			if (existingItem) {
				console.log('attempting to add existing item');
				await ordersApi.setItemQtyInCart(product._id, existingItem.qty + 1);
			} else {
				console.log('attempting to add new item ', product._id);
				await ordersApi.addItemToCart(product._id);
			}
			setItemCount(itemCount + 1);
		} catch (error) {
			console.log('Error adding item to cart:', error);
		}
	};

	return (
		<div className={styles.productPage}>
			{product ? (
				<div className={styles.productTile}>
					<div onClick={toggleFavorite}>{isFavorite ? '❤️' : '🤍'}</div>
					<div className={styles.productImage}>
						<img
							src={product.image}
							alt={product.name}
							className={styles.productImage}
						/>
					</div>
					<div className={styles.productInfo}>
						<h1 className={styles.productTitle}>{product.name}</h1>
						<p className={styles.productPrice}>${product.price}</p>
						<p className={styles.productDescription}>{product.description}</p>
						<p className={styles.productManufacturer}>
							By: {product.manufacturer}
						</p>
						<button className={styles.cart_button} onClick={handleAddToCart}>
							ADD TO CART
						</button>
						<p className={styles.productReviews}>Reviews: {product.reviews}</p>
					</div>
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default ProductPage;
