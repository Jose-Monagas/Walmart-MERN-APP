import React, { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import * as productsAPI from '../../utilities/products-api';
import { useParams } from 'react-router-dom';

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

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
		getProduct();
	}, [id]);

	return (
		<div className={styles.productPage}>
			{product ? (
				<div className={styles.productTile}>
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
