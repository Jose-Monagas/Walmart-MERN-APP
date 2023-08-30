import styles from './Rug.module.scss'

export default function Rug(props) {
	return (
		<div className={styles.RugPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
