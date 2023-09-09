import { useState, useEffect } from 'react';
import styles from './Cart.module.scss';
import * as ordersApi from '../../utilities/orders-api';
export default function Cart(props) {
	const [cartItems, setCartItems] = useState([]);
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const cart = await ordersApi.getCart();
				console.log(cart.cartItems);
				setCartItems(cart.cartItems);
			} catch (error) {
				console.log('Error getting your cart', error);
			}
		};
		fetchCart();
	}, []);

	return (
		<div className={styles.cart}>
			<h2>Shopping Cart</h2>
			<ul>
				{cartItems.map((cartItem) => (
					<li key={cartItem._id}>
						<p>{cartItem.item.name}</p>
						<p>Quantity:{cartItem.qty}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
