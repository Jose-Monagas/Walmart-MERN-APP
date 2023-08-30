import styles from './Gift.module.scss'

export default function Gift(props) {
	return (
		<div className={styles.GiftPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
