import { useEffect, useState } from 'react';
import styles from './SubcategoryPage.module.scss';
import * as productsAPI from '../../utilities/products-api';
import * as subCategoriesAPI from '../../utilities/subCategories-api';
import ProductTile from '../../components/ProductTile/ProductTile';
import { useParams } from 'react-router-dom';

/**
 * Converts a string from a format like "living-room-furniture"
 * to "Living Room Furniture" to match the subcategory name.
 * @param {string} [s] - The string to convert
 */
function convertPathToSubcatgeoryName(s) {
	return s
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export default function SubcategoryPage({
	setFavoriteCount,
	favoriteCount,
	setShowWishList,
	setItemCount,
	itemCount
}) {
	const { name } = useParams();
	const [products, setProducts] = useState([]);

	console.log({ name });

	useEffect(() => {
		async function getProducts() {
			const subcategoryName = convertPathToSubcatgeoryName(name);
			const subcategories = await subCategoriesAPI.listAllSubcategories();
			console.log('Subcategories:', subcategories);
			const subcategoryId =
				subcategories.find((e) => e.name === subcategoryName)._id || 'unknown';
			const data = await productsAPI.getProductsBySubCategoryId(subcategoryId);
			console.log('Products', data);
			setProducts(data);
		}
		getProducts();
	}, [name]);
	return (
		<div className={styles.FurniturePage}>
			<center>
				{products.map((product) => (
					<ProductTile
						key={product._id}
						product={product}
						setFavoriteCount={setFavoriteCount}
						favoriteCount={favoriteCount}
						setItemCount={setItemCount}
						itemCount={itemCount}
					/>
				))}
			</center>
		</div>
	);
}
