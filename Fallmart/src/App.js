import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import DepartmentList from './components/DepartmentList/DepartmentList';
import SecondNav from './components/SecondNav/SecondNav';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import SubcategoryPage from './pages/SubcategoryPage/SubcategoryPage';
import * as deptApi from './utilities/dept-api';

export default function App() {
	const [departments, setDepartments] = useState([]);

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
			<HeaderBanner />
			<NavBar />
			<SecondNav />
			<DepartmentList departments={departments} />
			<Routes>
				<Route path="/" element={<HomeImage />} />
				<Route path="/:name" element={<SubcategoryPage />} />
			</Routes>
		</div>
	);
}
