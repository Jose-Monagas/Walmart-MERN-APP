import styles from './TabletopBar.module.scss'

export default function TabletopBar(props) {
	return (
		<div className={styles.TabletopBarPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
