import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
  return (
    <div className={styles.grid}>
      <div className={styles.imageContainer}>
        <img src="img/sofa.jpeg" className={styles.galleryImage} alt="Image 1" />
        <div className={styles.imageTextContainer}>
          <div className={styles.imageTopText}>$500+</div>
          <div className={styles.imageBottomText}>$300</div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src="img/suit.jpeg" className={styles.galleryImage} alt="Image 2" />
        <div className={styles.imageTextContainer}>
          <div className={styles.imageTopText}>$300+</div>
          <div className={styles.imageBottomText}>$200</div>
        </div>
      </div>
      <div className={styles.imageContainer}>
  <img src="img/cellphones.jpeg" className={styles.galleryImage} alt="Image 3" />
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$300+</div>
    <div className={styles.imageBottomText}>$200</div>
  </div>
</div>
<div className={styles.imageContainer}>
  <img src="img/dog.jpeg" className={styles.galleryImage} alt="Image 4" />
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$50+</div>
    <div className={styles.imageBottomText}>$20</div>
  </div>
</div>
<div className={styles.imageContainer}>
  <img src="img/laptop.png" className={styles.galleryImage} alt="Image 5" />
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$900+</div>
    <div className={styles.imageBottomText}>$800</div>
  </div>
</div>
<div className={styles.imageContainer}>
  <img src="img/table.jpeg" className={styles.galleryImage} alt="Image 6" />
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$500+</div>
    <div className={styles.imageBottomText}>$200</div>
  </div>
</div>

    </div>
  );
}

export default HomeImage;