import React from 'react';

function ProductTile({ product }) {
	return (
		<>
			<h3>{product.name}</h3>
			<img src={product.image} height={'110px'} width={'100px'}></img>
			<h4>${product.price}</h4>
			<h4>Sold by: {product.manufacturer}</h4>
			<button>add to cart</button>
		</>
	);
}

export default ProductTile;
