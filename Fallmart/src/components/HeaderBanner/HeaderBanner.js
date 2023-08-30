import React from 'react';
import styles from './HeaderBanner.module.scss';

function HeaderBanner() {
	return (
		<div className="header_banner">
			<ul className="header_banner_container">
				<li className="cratebarrel">fallmart</li>
				<li className="cratekids">fallmart&kids</li>
				<li className="cb">CB2</li>
				<div className="flag">
					<img
						src="//images.crateandbarrel.com/is/image/Crate/flag_US"
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
