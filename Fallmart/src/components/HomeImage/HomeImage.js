import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
	return (
		<div className={styles.grid}>
			<div className={styles.imageContainer}>
				<img
					src="img/apotheke.jpg"
					className={styles.galleryImage}
					alt="Image 1"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>
						Apotheke Charcoal-Scented Candle
					</div>
					<div className={styles.imageTopText}>$50</div>
					<div className={styles.imageBottomText}>$30</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src="img/Champagnes.jpg"
					className={styles.galleryImage}
					alt="Image 2"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>Champagne flutes</div>
					<div className={styles.imageTopText}>$100</div>
					<div className={styles.imageBottomText}>$75</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src="img/coffeemaker.jpg"
					className={styles.galleryImage}
					alt="Image 3"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>
						Melitta Vision White 12-Cup Drip Coffee Maker
					</div>
					<div className={styles.imageTopText}>$600+</div>
					<div className={styles.imageBottomText}>$400</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src="img/lanterns.jpg"
					className={styles.galleryImage}
					alt="Image 4"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>
						Les Jardins Blade Weathered Teak Lantern
					</div>
					<div className={styles.imageTopText}>$220+</div>
					<div className={styles.imageBottomText}>$130</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src="img/pillow.jpg"
					className={styles.galleryImage}
					alt="Image 5"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>Pillow Set</div>
					<div className={styles.imageTopText}>$180+</div>
					<div className={styles.imageBottomText}>$120</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<img
					src="img/toster.jpg"
					className={styles.galleryImage}
					alt="Image 6"
				/>

				<div className={styles.imageTextContainer}>
					<div className={styles.imageVeryTopText}>
						Smeg Matte Jade Green 2-Slice Toaster
					</div>
					<div className={styles.imageTopText}>$600+</div>
					<div className={styles.imageBottomText}>$500</div>
				</div>
			</div>
		</div>
	);
}

export default HomeImage;
