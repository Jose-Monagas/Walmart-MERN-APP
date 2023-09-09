import styles from './Bedding.module.scss'

export default function Bedding(props) {
	return (
		<div className={styles.BeddingPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
