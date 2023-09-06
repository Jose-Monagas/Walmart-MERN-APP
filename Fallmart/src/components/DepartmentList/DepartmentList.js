import React, { useState } from 'react';
import styles from './DepartmentList.module.scss';
import { Link } from 'react-router-dom'

export default function DepartmentList({ departments }) {
  const [hoveredDept, setHoveredDept] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleMouseEnter = (dept) => {
    setHoveredDept(dept);
    setIsModalActive(true); 
  };

  const handleMouseLeave = () => {
    setHoveredDept(null);
  };

  return (
      <ul className={styles.DepartmentList} onMouseLeave={handleMouseLeave}>
        {departments.map((dept) => (
          <li
            key={dept._id}
            onMouseEnter={() => handleMouseEnter(dept)}
            className={styles.listItem}
          >
            {dept.name}
            {isModalActive && hoveredDept=== dept ? (
        <div className={`${styles.modal} ${styles.active}`} onMouseLeave={handleMouseLeave}>
          <ul className={styles.SubcategoryList}>
            {hoveredDept.subcategories.map((subcategory) => (
              <li key={subcategory._id}>
                <Link to={``}>{subcategory.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
          </li>
        ))}
      </ul>
  );
}

/// subcats not showing