import ProductTile from '../ProductTile/ProductTile';
export default function SearchResults({
	searchResults,
	setFavoriteCount,
	favoriteCount,
	itemCount,
	setItemCount
}) {
	const productTiles = searchResults.map((product) => (
		<ProductTile
			key={product._id}
			product={product}
			setFavoriteCount={setFavoriteCount}
			favoriteCount={favoriteCount}
			itemCount={itemCount}
			setItemCount={setItemCount}
		/>
	));
	return <>{productTiles}</>;
}
