import React, { useState } from 'react';
import styles from './OrderDetail.module.scss';
import CartItem from '../CartItem/CartItem';
import coupons from '../../utilities/coupons';
import * as ordersApi from '../../utilities/orders-api';

export default function OrderDetail({
	order,
	updateOrder,
	handleChangeQty,
	handleCheckout
}) {
	if (!order || !order.cartItems) return null;

	const cartItems = order.cartItems.map((item) => {
		return (
			<CartItem
				cartItem={item}
				isPaid={order.isPaid}
				key={item._id}
				handleChangeQty={handleChangeQty}
			/>
		);
	});
	const [isMemberQuestionVisible, setIsQuestionVisible] = useState(false);
	const [isInputFormVisible, setIsInputFormVisible] = useState(false);
	const [text, setText] = useState('');

	const showForm = () => {
		setIsInputFormVisible(true);
	};

	const showMemberQuestion = () => {
		setIsQuestionVisible(true);
	};

	const hideMemberQuestion = () => {
		setIsQuestionVisible(false);
		setIsInputFormVisible(false);
	};

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const changeTotal = async (e) => {
		e.preventDefault();
		ordersApi.applyCoupon();
	};

	return (
		<div className={styles.detail}>
			<div>
				{order.isPaid ? (
					<span>
						ORDER <span className="smaller">{order.orderId}</span>
					</span>
				) : (
					<span>NEW ORDER</span>
				)}
				<span> {new Date(order.updatedAt).toLocaleDateString()}</span>
			</div>
			<div>
				{order.cartItems.length ? (
					<>
						{cartItems}
						<section>
							{order.isPaid ? (
								<span>TOTAL&nbsp;&nbsp;</span>
							) : (
								<button
									onClick={handleCheckout}
									disabled={!order.cartItems.length}
								>
									CHECKOUT
								</button>
							)}
							<span>{order.totalQty}</span>
							<span>${order.orderTotal.toFixed(2)}</span>
						</section>
						{order.isPaid ? null : (
							<div>
								{isMemberQuestionVisible ? (
									<div className={styles.mainBox}>
										Are you a fallmart plus member?
										<label>
											<input
												type="checkbox"
												className={styles.checkbox}
												onClick={showForm}
											/>{' '}
											Yes
										</label>
										<label>
											<input
												type="checkbox"
												className={styles.checkbox}
												onClick={hideMemberQuestion}
											/>{' '}
											No
										</label>
										{isInputFormVisible && (
											<form onSubmit={changeTotal}>
												<br />
												<input
													type="text"
													name="text"
													placeholder="input your phone number"
													value={text}
													onChange={handleChange}
												/>
												<button type="submit">Submit</button>
											</form>
										)}
									</div>
								) : (
									<button onClick={showMemberQuestion}>
										Are You a member?
									</button>
								)}
							</div>
						)}
					</>
				) : null}
			</div>
		</div>
	);
}
