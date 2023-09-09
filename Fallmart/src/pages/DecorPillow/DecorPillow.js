import styles from './DecorPillow.module.scss'

export default function DecorPillow(props) {
	return (
		<div className={styles.DecorPillowPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
