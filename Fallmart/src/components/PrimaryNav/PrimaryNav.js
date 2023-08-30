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
			<Link to="/outdoor">
			<li>Outdoor</li>
			</Link>
			<Link to="/tabletopbar">
			<li>Tabletop & Bar</li>
			</Link>
			<Link to="/kitchen">
			<li>Kitchen</li>
			</Link>
			<Link to="/bedding">
			<li>Bedding</li>
			</Link>
			<Link to="/bath">
			<li>Bath</li>
			</Link>
			<Link to="/decorpillows">
			<li>Decor & Pillows</li>
			</Link>
			<Link to="/rugs">
			<li>Rugs</li>
			</Link>
			<Link to="/lighting">
			<li>Lighting</li>
			</Link>
			<Link to="/window">
			<li>Window</li>
			</Link>
			<Link to="/holidays">
			<li>Holidays</li>
			</Link>
			<Link to="/gifts">
			<li>Gifts</li>
			</Link>
			<Link to="/sale">
			<li className={styles.sale}>SALE</li>
			</Link>
			<Link to="/kids">
			<li>&kids</li>
			</Link>
		</ul>
	);
}

export default PrimaryNav;


