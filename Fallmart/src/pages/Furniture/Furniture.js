import { useEffect, useState } from 'react';
import styles from './Furniture.module.scss';
import * as productsAPI from '../../utilities/products-api';
import * as subCategoriesAPI from '../../utilities/subCategories-api';
import ProductTile from '../../components/ProductTile/ProductTile';

export default function SubcategoryPage({ name }) {
	console.log({ name });
	const [products, setProducts] = useState([]);
	// console.log(props[0]);
	useEffect(() => {
		async function getProducts() {
			const subcategories = await subCategoriesAPI.listAllSubcategories();
			const subcategoryId =
				subcategories.find((e) => e.name === name)._id || 'unknown';
			console.log({ subcategoryId });
			const data = await productsAPI.getProductsBySubCategoryId(subcategoryId);
			setProducts(data);
		}
		getProducts();
	}, []);
	return (
		<div className={styles.FurniturePage}>
			<center>
				{products.map((product) => {
					return <ProductTile key={product._id} product={product} />;
				})}
			</center>
		</div>
	);
}
