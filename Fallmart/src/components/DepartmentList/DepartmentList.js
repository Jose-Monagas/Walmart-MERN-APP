import React, { useState, useEffect } from 'react';
import styles from './DepartmentList.module.scss';
import { Link } from 'react-router-dom';

export default function DepartmentList({ departments }) {
	const [hoveredDept, setHoveredDept] = useState(null);
	const [isModalActive, setIsModalActive] = useState(false);
	const [showButton, setShowButton] = useState(window.innerWidth <= 810);
	const [showDropDown, setShowDropDown] = useState(window.innerWidth >= 810);

	const handleMouseEnter = (dept) => {
		setHoveredDept(dept);
		setIsModalActive(true);

		setTimeout(() => {
			const lines = document.querySelectorAll(`.${styles.line}`);
			lines.forEach((line, index) => {
				setTimeout(() => {
					line.classList.add(styles.active);
				}, index * 200);
			});
		}, 100);
	};

	const handleMouseLeave = () => {
		setHoveredDept(null);
	};

	const handleButtonClick = () => {
		setShowDropDown(!showDropDown);
	};

	const handleResize = () => {
		setShowButton(window.innerWidth <= 810);
		setShowDropDown(window.innerWidth >= 810);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className={styles.DepartmentContent}>
			{showButton && (
				<button
					onClick={handleButtonClick}
					className={`${styles.listButton} ${
						showDropDown ? styles.active : ''
					}`}
				>
					<img className={styles.image} src="img/menu.png" alt="" />
				</button>
			)}
			{showDropDown && (
				<ul className={styles.DepartmentList} onMouseLeave={handleMouseLeave}>
					{departments.map((dept) => (
						<li
							key={dept._id}
							onMouseEnter={() => handleMouseEnter(dept)}
							className={styles.listItem}
						>
							{dept.name}
							{isModalActive && hoveredDept === dept ? (
								<div
									className={`${styles.modal} ${styles.active}`}
									onMouseLeave={handleMouseLeave}
								>
									<ul className={styles.SubcategoryList}>
										{hoveredDept.subcategories.map((subcategory, index) => (
											<li
												key={subcategory._id}
												className={`${styles.modalText} ${styles.line}`}
												style={{ animationDelay: `${index * 0.2}s` }}
											>
												<Link
													to={subcategory.name
														.toLowerCase()
														.replace(/\s+/g, '-')}
												>
													{subcategory.name}
												</Link>
											</li>
										))}
									</ul>
								</div>
							) : null}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
