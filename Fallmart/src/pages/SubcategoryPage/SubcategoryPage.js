import { useEffect, useState } from 'react';
import styles from './SubcategoryPage.module.scss';
import * as productsAPI from '../../utilities/products-api';
import * as subCategoriesAPI from '../../utilities/subCategories-api';
import ProductTile from '../../components/ProductTile/ProductTile';

export default function SubcategoryPage({ name }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const subcategories = await subCategoriesAPI.listAllSubcategories();
			const subcategoryId =
				subcategories.find((e) => e.name === name)._id || 'unknown';
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
