import styles from './CartItem.module.scss';

export default function CartItem({ cartItem, isPaid, handleChangeQty }) {
	return (
		<div className={styles.item}>
			<img src={cartItem.item.image} className={styles.image}></img>
			<div>
				<div>
					<div>{cartItem.item.type}</div>
					<div>{cartItem.item.name}</div>
				</div>
			</div>
			<div>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty + 1)}
					>
						+
					</button>
				)}
				<span>{cartItem.qty}</span>
				{!isPaid && (
					<button
						className="btn-xs"
						onClick={() => handleChangeQty(cartItem.item._id, cartItem.qty - 1)}
					>
						-
					</button>
				)}
			</div>
			<div>${cartItem.extPrice.toFixed(2)}</div>
		</div>
	);
}
