import React, { useState } from 'react';
import styles from './DepartmentList.module.scss';

export default function DepartmentList({ showSubCats, hideSubCats, departments }) {
  const [hoveredDept, setHoveredDept] = useState(null);

  const mouseOverDepartment = (dept) => {
    setHoveredDept(dept);
    showSubCats(dept.subcategories); 
  };

  const mouseLeaveDepartment = () => {
    setHoveredDept(null);
    hideSubCats(); 
  };

  return (
    <ul className={styles.DepartmentList}>
      {departments.map((dept) => (
        <li
          key={dept._id}
          onMouseEnter={mouseOverDepartment(dept)}
          onMouseLeave={mouseLeaveDepartment()}
          className={hoveredDept === dept ? styles.active : ''}
        >
          {dept.name}
          {hoveredDept === dept ? 
            <ul className={styles.SubcategoryList}>
              {dept.subcategories.map((subcategory) => (
                <li key={subcategory._id}>{subcategory.name}</li>
              ))}
            </ul> : null
          }
        </li>
      ))}
    </ul>
  );
}
