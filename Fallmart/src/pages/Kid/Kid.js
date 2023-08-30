import styles from './Kid.module.scss'

export default function Kid(props) {
	return (
		<div className={styles.KidPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
