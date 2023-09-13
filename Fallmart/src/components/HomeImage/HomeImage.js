import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
	return (
		<div className={styles.grid}>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/living-room-furniture">
					<img
						src="img/sofa.jpeg"
						className={styles.galleryImage}
						alt="Image 1"
					/>
				</a>
				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$500+</div>
					<div className={styles.imageBottomText}>$300</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/formal-wear">
					<img
						src="img/suit.jpeg"
						className={styles.galleryImage}
						alt="Image 2"
					/>
				</a>
				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$500+</div>
					<div className={styles.imageBottomText}>$350</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/mobile-phones">
					<img
						src="img/cellphones.jpeg"
						className={styles.galleryImage}
						alt="Image 3"
					/>
				</a>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$600+</div>
					<div className={styles.imageBottomText}>$400</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/pet-food">
					<img
						src="img/dog.jpeg"
						className={styles.galleryImage}
						alt="Image 4"
					/>
				</a>
				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$20+</div>
					<div className={styles.imageBottomText}>$13</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/computers-&-cameras">
					<img
						src="img/laptop.png"
						className={styles.galleryImage}
						alt="Image 5"
					/>
				</a>
				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$900+</div>
					<div className={styles.imageBottomText}>$800</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<a href="http://localhost:3000/living-room-furniture">
					<img
						src="img/table.jpeg"
						className={styles.galleryImage}
						alt="Image 6"
					/>
				</a>
				<div className={styles.imageTextContainer}>
					<div className={styles.imageTopText}>$600+</div>
					<div className={styles.imageBottomText}>$500</div>
				</div>
			</div>
		</div>
	);
}

export default HomeImage;
