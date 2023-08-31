import { useEffect, useState } from 'react';
import styles from './Furniture.module.scss';
import * as productsAPI from '../../utilities/products-api';

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
			</center>
		</div>
	);
}
