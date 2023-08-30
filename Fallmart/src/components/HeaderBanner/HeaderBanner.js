import React from 'react';
import styles from './HeaderBanner.module.scss';

function HeaderBanner() {
	return (
		<div className={styles.header_banner}>
			<ul className={styles.header_banner_container}>
				<li className={styles.cratebarrel}>fallmart</li>
				<li className={styles.cratekids}>fallmart&kids</li>
				<li className={styles.cb}>CB2</li>
				<div className={styles.flag}>
					<img
						src="https://i.imgur.com/M207hlJ.jpg"
						alt="Ship To: United States"
						title="Ship To: United States"
						height="14"
						width="21"
					/>
				</div>
			</ul>
		</div>
	);
}

export default HeaderBanner;
