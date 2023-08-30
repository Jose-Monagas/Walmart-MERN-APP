import styles from './Furniture.module.scss'

export default function Furniture(props) {
	return (
		<div className={styles.FurniturePage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
