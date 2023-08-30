import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
	return (
		<div className={styles.allimage}>
			<img
				src="https://i.imgur.com/eflVxXr.jpg"
				alt=""
				// width="100%"
			/>
			<img
				src="https://i.imgur.com/frxnxYF.jpg"
				alt=""
				// width="100%"
			/>
		</div>
	);
}

export default HomeImage;
