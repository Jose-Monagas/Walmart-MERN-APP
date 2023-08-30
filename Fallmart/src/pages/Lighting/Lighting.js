import styles from './Lighting.module.scss'

export default function Lighting(props) {
	return (
		<div className={styles.LightingPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
