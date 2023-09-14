import styles from './OrderHistoryPage.module.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import CheckoutOutPage from '../CheckOutPage/CheckoutOutPage';

export default function OrderHistoryPage({ user, setUser }) {
	const [orders, setOrders] = useState([]);
	const [activeOrder, setActiveOrder] = useState(null);

	useEffect(function () {
		// Load previous orders (paid)
		async function fetchOrderHistory() {
			const orders = await ordersAPI.getOrderHistory();
			setOrders(orders);
			// If no orders, activeOrder will be set to null below
			setActiveOrder(orders[0] || null);
		}
		fetchOrderHistory();
	}, []);

	/*--- Event Handlers --- */
	function handleSelectOrder(order) {
		setActiveOrder(order);
	}

	/*--- Rendered UI --- */
	return (
		<>
			<h2>Your Order History</h2>
			<main className={styles.OrderHistoryPage}>
				<div className={styles.orderList}>
					<OrderList
						orders={orders}
						activeOrder={activeOrder}
						handleSelectOrder={handleSelectOrder}
					/>
				</div>
				<div className={styles.activeOrder}>
					<OrderDetail order={activeOrder} />
				</div>
			</main>
		</>
	);
}
