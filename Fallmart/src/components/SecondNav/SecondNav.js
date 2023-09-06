import React from 'react';
import styles from './SecondNav.module.scss';

function SecondNav() {
	return (
		<ul className={styles.second_nav}>
			<li>What's new</li>
			<li>wedding registry</li>
			<li>free design services</li>
			<li>trade program</li>
			<li>collaborations</li>
			<li>home reno</li>
			<li>halloween</li>
		</ul>
	);
}

export default SecondNav;
