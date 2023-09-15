import { useState, useEffect } from 'react';
import styles from './CheckOutPage.module.scss';
import * as ordersApi from '../../utilities/orders-api';
import { useNavigate } from 'react-router-dom';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function CheckoutOutPage(props) {
	const [cart, setCart] = useState({});
	const navigate = useNavigate();
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const cart = await ordersApi.getCart();
				//console.log(cart);
				setCart(cart);
			} catch (error) {
				console.log('Error getting your cart', error);
			}
		};
		fetchCart();
	}, []);

	async function handleAddToOrder(productId) {
		const updatedCart = await ordersApi.addItemToCart(productId);

		setCart(updatedCart);
	}

	async function handleChangeQty(productId, newQty) {
		const updatedCart = await ordersApi.setItemQtyInCart(productId, newQty);
		setCart(updatedCart);
	}

	async function handleCheckout() {
		await ordersApi.checkout();
		navigate('/account/order-tracking');
	}
	return (
		<main>
			<h2>CHECKOUT</h2>
			<OrderDetail
				order={cart}
				updateOrder={setCart}
				handleChangeQty={handleChangeQty}
				handleCheckout={handleCheckout}
			/>
		</main>
	);
}
