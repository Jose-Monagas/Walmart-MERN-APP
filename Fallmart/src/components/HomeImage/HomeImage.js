import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
  return (
    <div className={styles.grid}>
      <div className={styles.imageContainer}>
      <a href="http://localhost:3000/product/64fff315d0863b5b5a521ac9">
      <img src="img/sofa.jpeg" className={styles.galleryImage} alt="Image 1" />
      </a> 
        <div className={styles.imageTextContainer}>
          <div className={styles.imageTopText}>$500+</div>
          <div className={styles.imageBottomText}>$300</div>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <a href="http://localhost:3000/product/64fff315d0863b5b5a521b0a">
      <img src="img/suit.jpeg" className={styles.galleryImage} alt="Image 2" />
      </a>
        <div className={styles.imageTextContainer}>
          <div className={styles.imageTopText}>$500+</div>
          <div className={styles.imageBottomText}>$350</div>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <a href="http://localhost:3000/product/64fff315d0863b5b5a521ac8">
      <img src="img/cellphones.jpeg" className={styles.galleryImage} alt="Image 3" />
      </a>

  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$600+</div>
    <div className={styles.imageBottomText}>$400</div>
  </div>
</div>
<div className={styles.imageContainer}>
<a href="http://localhost:3000/product/64fff315d0863b5b5a521aca">
  <img src="img/dog.jpeg" className={styles.galleryImage} alt="Image 4" />
</a>
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$20+</div>
    <div className={styles.imageBottomText}>$13</div>
  </div>
</div>
<div className={styles.imageContainer}>
  <a href="http://localhost:3000/product/64fff315d0863b5b5a521acf">
  <img src="img/laptop.png" className={styles.galleryImage} alt="Image 5" />
  </a>
  <div className={styles.imageTextContainer}>
    <div className={styles.imageTopText}>$900+</div>
    <div className={styles.imageBottomText}>$800</div>
  </div>
</div>
<div className={styles.imageContainer}>
<a href="http://localhost:3000/product/64fff315d0863b5b5a521b00">
  <img src="img/table.jpeg" className={styles.galleryImage} alt="Image 6" />
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