import React from 'react';
import { useEffect, useState } from 'react';
import styles from './ProductPage.module.scss';
import * as productsAPI from '../../utilities/products-api';
import { useParams } from 'react-router-dom';

function ProductPage() {
	const { id } = useParams();
	const [product, setProduct] = useState(null); // Change from [] to null

	useEffect(() => {
		async function getProduct() {
			try {
				const data = await productsAPI.getProductById(id);
				console.log('Product:', data);
				setProduct(data);
			} catch (error) {
				console.error('Error fetching product:', error);
				setProduct(null); // Handle error
			}
		}
		getProduct();
	}, [id]);

	return (
		<div>
			<h3>Product Details</h3>
			{product ? (
				<div className={styles.productContainer}>
					<h2>{product.name}</h2>
					<img
						src={product.image}
						alt={product.name}
						style={{
							maxWidth: '100%', // Ensures the image scales within its container
							height: 'auto', // Maintains the aspect ratio
							display: 'block' // Removes any extra space below the image
						}}
					/>

					<p>Price: ${product.price}</p>
					<p>Description: {product.description}</p>

					{/* Add more product information here */}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

export default ProductPage;
