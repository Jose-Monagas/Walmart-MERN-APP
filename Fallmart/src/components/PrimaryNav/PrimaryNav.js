import styles from './PrimaryNav.module.scss';
import { Link } from 'react-router-dom';

function PrimaryNav() {
	return (
		<ul className={styles.primary_list}>
			<li>
				<Link to="/furniture">Furniture</Link>
			</li>
			<li>
				<Link to="/outdoor">Outdoor</Link>
			</li>
			<li>
				<Link to="/tabletopbar">Tabletop &amp; Bar</Link>
			</li>
			<li>
				<Link to="/kitchen">Kitchen</Link>
			</li>
			<li>
				<Link to="/bedding">Bedding</Link>
			</li>
			<li>
				<Link to="/bath">Bath</Link>
			</li>
			<li>
				<Link to="/decorpillows">Decor &amp; Pillows</Link>
			</li>
			<li>
				<Link to="/rugs">Rugs</Link>
			</li>
			<li>
				<Link to="/lighting">Lighting</Link>
			</li>
			<li>
				<Link to="/window">Window</Link>
			</li>
			<li>
				<Link to="/holidays">Holidays</Link>
			</li>
			<li>
				<Link to="/gifts">Gifts</Link>
			</li>
			<li>
				<Link to="/sale" className={styles.sale}>
					SALE
				</Link>
			</li>
			<li>
				<Link to="/kids">&amp;kids</Link>
			</li>
		</ul>
	);
}
export default PrimaryNav;
