import styles from './Sale.module.scss'

export default function Sale(props) {
	return (
		<div className={styles.SalePage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
