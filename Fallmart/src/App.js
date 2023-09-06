import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import Furniture from './pages/Furniture/Furniture';
import * as deptApi from './utilities/dept-api';
import DepartmentList from './components/DepartmentList/DepartmentList'

export default function App() {
	const [departments, setDepartments] = useState([]);

	useEffect(() => {
		const fetchDepartments = async () => {
			try {
				const response = await deptApi.listDept();
				setDepartments(response);
				console.log(response)
			} catch (error) {
				console.log(error);
			}
		};
		fetchDepartments();
	}, []);

	return (
		<div className="App">
			<NavBar />
			<DepartmentList departments={departments} />
			<Routes>
				<Route path="/" element={<HomeImage />} />
				<Route path="/furniture" element={<Furniture />} />
			</Routes>
		</div>
	);
}
