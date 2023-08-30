import styles from './PrimaryNav.module.scss';
import { Link } from 'react-router-dom';

function PrimaryNav() {
	// TODO: get styles working and pass in styles.primary_list for className
	console.log(styles);
	return (
		<ul className={styles.primary_list}>
			<Link to="/furniture">
				<li>Furniture</li>
			</Link>
			<li>Outdoor</li>
			<li>Tabletop & Bar</li>
			<li>Kitchen</li>
			<li>Bedding</li>
			<li>Bath</li>
			<li>Decor & Pillows</li>
			<li>Rugs</li>
			<li>Lighting</li>
			<li>Window</li>
			<li>Holidays</li>
			<li>Gifts</li>
			<li className={styles.sale}>SALE</li>
			<li>&kids</li>
		</ul>
	);
}

export default PrimaryNav;
