import styles from './Bath.module.scss'

export default function Bath(props) {
	return (
		<div className={styles.BathPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
