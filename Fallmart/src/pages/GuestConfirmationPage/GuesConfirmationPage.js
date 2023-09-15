import styles from '/Users/jefreyz/software_classroom/unit_4/Walmart-MERN-APP/Fallmart/src/pages/GuestConfirmationPage/GuestConfirmationPage.module.scss';
export default function GuestConfirmationPage({ cart }) {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.header}>Thank you for shopping User</h1>
				<h3 className={styles.orderNumber}>Your order number:{cart.orderId}</h3>
				<h4>Your items:</h4>
				<ul>
					{cart.cartItems.map((item) => (
						<li key={item._id} className={styles.item}>
							<img src={item.item.image} className={styles.image} />
							<div>
								<p>Name:{item.item.name}</p>
								<p>Price:{item.item.price}</p>
								<p>Quantity:{item.qty}</p>
							</div>
						</li>
					))}
				</ul>
				<h4 className={total}>Total Order Amount:{cart.orderTotal}</h4>
			</div>
		</>
	);
}
