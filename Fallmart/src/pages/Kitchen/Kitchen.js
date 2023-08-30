import styles from './Kitchen.module.scss'

export default function Kitchen(props) {
	return (
		<div className={styles.KitchenPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
