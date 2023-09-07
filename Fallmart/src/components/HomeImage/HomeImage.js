import React from 'react';
import styles from './HomeImage.module.scss';

function HomeImage() {
  return (
    <div className={styles.grid}>
      <img src="img/sofa.jpeg" className="galleryImage" alt="Image 1" />
	  <img src="img/suit.jpeg" className="galleryImage" alt="Image 2" />	
	  <img src="img/cellphones.jpeg" className="galleryImage" alt="Image 3" />
	  <img src="img/dog.jpeg" className="galleryImage" alt="Image 4" />
	  <img src="img/tv.jpeg" className="galleryImage" alt="Image 5" />
	  <img src="img/table.jpeg" className="galleryImage" alt="Image 6" />
    </div>
  );
}

export default HomeImage;
