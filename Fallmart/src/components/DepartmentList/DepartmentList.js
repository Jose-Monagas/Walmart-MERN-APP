import React, { useState } from 'react';
import styles from './DepartmentList.module.scss';

export default function DepartmentList({ departments, subcategories }) {
  const [hoveredDept, setHoveredDept] = useState(null);

  const handleMouseEnter = (dept) => {
    setHoveredDept(dept);
  };

  const handleMouseLeave = () => {
    setHoveredDept(null);
  };

  return (
    <ul className={styles.DepartmentList}>
      {departments.map((dept) => (
        <li
          key={dept._id}
          onMouseEnter={handleMouseEnter(dept)}
          onMouseLeave={handleMouseLeave}
          className={hoveredDept === dept ? styles.active : ''}
        >
          {dept.name}
          {hoveredDept === dept ? 
            <ul className={styles.SubcategoryList}>
            {dept.subcategories.map((subcategory) => (
              <li key={subcategory._id}>{subcategory.name}</li>
            ))}
          </ul> : null }
        </li>
      ))}
    </ul>
  );
}