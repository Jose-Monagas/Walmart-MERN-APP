import { useEffect, useState } from 'react';
import styles from './Furniture.module.scss';
import * as productsAPI from '../../utilities/products-api';
import ProductTile from '../../components/ProductTile/ProductTile';

export default function Furniture(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const data = await productsAPI.getProducts();
			setProducts(data);
		}
		getProducts();
	}, []);
	return (
		<div className={styles.FurniturePage}>
			<center>
				<h1>This is the {props.page} page</h1>
				{products.map((product) => {
					return <ProductTile product={product} />;
				})}
			</center>
		</div>
	);
}
