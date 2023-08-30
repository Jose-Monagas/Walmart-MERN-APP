import { useState } from 'react';
import styles from './Cart.module.scss'

export default function Cart(props) {
	return(
		<div className={styles.CartPage}>
			<center>
			<h1>This is the {props.page} page</h1>
				<div>
				</div>				
			</center>
		</div>
	) 
}
