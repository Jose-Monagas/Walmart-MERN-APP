import React, { useState } from 'react';
import styles from './ProductTile.module.scss';

function ProductTile({ product }) {

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.product_tile}>
      <div className={styles.favorite_button} onClick={toggleFavorite}>
        {isFavorite ? '❤️' : '🤍'} 
      </div>
      <h3>{product.name}</h3>
      <img src={product.image} height={'110px'} width={'100px'} alt={product.name} />
      <h4>${product.price}</h4>
      <h4 className={styles.productSold}>Sold by: {product.manufacturer}</h4>
      <button className={styles.cart_button}>add to cart</button>
    </div>
  );
}

export default ProductTile;