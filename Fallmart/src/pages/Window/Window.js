import styles from './Window.module.scss'

export default function Window(props) {
	return (
		<div className={styles.WindowPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
