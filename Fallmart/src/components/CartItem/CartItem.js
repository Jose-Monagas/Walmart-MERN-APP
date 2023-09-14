import React from 'react';
import styles from './CartItem.module.scss';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
	return (
		<div className={styles.item}>
			<img
				src={cartItem.item.image}
				className={styles.checkoutImage}
				alt={cartItem.item.name}
			/>
			<div>
				<div className={styles.productInfo}>
					<div>{cartItem.item.type}</div>
					<div className={styles.name}>{cartItem.item.name}</div>
					<div className={styles.description}>{cartItem.item.description}</div>
				</div>
			</div>
			<div className={styles.buttonPlusMinus}>
				{!isPaid ? (
					<>
						<button
							className={styles.buttonMinus}
							onClick={() =>
								handleChangeQty(cartItem.item._id, cartItem.qty - 1)
							}
						>
							—
						</button>
						<span className={styles.numberOfItems}>{cartItem.qty}</span>
						<button
							className={styles.buttonPlus}
							onClick={() =>
								handleChangeQty(cartItem.item._id, cartItem.qty + 1)
							}
						>
							+
						</button>
					</>
				) : (
					<>
						<span className={styles.numberOfItems}>{cartItem.qty}</span>
					</>
				)}
			</div>
			<div className={styles.totalPrice}>${cartItem.extPrice.toFixed(2)}</div>
		</div>
	);
}
