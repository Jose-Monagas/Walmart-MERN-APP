import styles from './Holiday.module.scss'

export default function Holiday(props) {
	return (
		<div className={styles.HolidayPage}>
			<center>
				<h1>This is the {props.page} page</h1>
			</center>
		</div>
	);
}
