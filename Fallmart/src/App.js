import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import DepartmentList from './components/DepartmentList/DepartmentList';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import SubcategoryPage from './pages/SubcategoryPage/SubcategoryPage';
import * as deptApi from './utilities/dept-api';

export default function App() {
	const [departments, setDepartments] = useState([]);
	const [favoriteCount, setFavoriteCount] = useState(0);
	const [showWishList, setShowWishList] = useState(false);

	useEffect(() => {
		const fetchDepartments = async () => {
			try {
				const response = await deptApi.listDept();
				setDepartments(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchDepartments();
	}, []);

	return (
		<div className="App">
			<NavBar favoriteCount={favoriteCount} setShowWishList={setShowWishList} />
			<DepartmentList departments={departments} />
			<Routes>
				<Route path="/" element={<HomeImage />} />
				<Route
					path="/:name"
					element={
						<SubcategoryPage
							setFavoriteCount={setFavoriteCount}
							favoriteCount={favoriteCount}
							showWishList={showWishList}
						/>
					}
				/>
			</Routes>
		</div>
	);
}
