import React from 'react';
import styles from './HeaderBanner.module.scss';

function HeaderBanner() {
	return (
		<div>
			<ul className={styles.header_banner_container}>
				<li >fallmart</li>
				<li >fallmart&kids</li>
				<li className={styles.cb}>CB2</li>
				<div> 
					<img
						src="https://i.imgur.com/M207hlJ.jpg"
						alt="Ship To: United States"
						title="Ship To: United States"
						height="20"
						width="25"
					/>
				</div>
			</ul>
		</div>
	);
}

export default HeaderBanner;
