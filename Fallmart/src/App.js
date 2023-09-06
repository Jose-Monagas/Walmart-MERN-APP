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
			<NavBar />
			<DepartmentList departments={departments} />
			<Routes>
				<Route path="/" element={<HomeImage />} />
				<Route
					path="/living-room-furniture"
					element={<SubcategoryPage name="Living Room Furniture" />}
				/>
				<Route path="/fruits" element={<SubcategoryPage name="Fruits" />} />
				<Route
					path="/hair-care"
					element={<SubcategoryPage name="Hair Care" />}
				/>
				<Route path="/diapers" element={<SubcategoryPage name="Diapers" />} />
				<Route
					path="/formal-wear"
					element={<SubcategoryPage name="Formal Wear" />}
				/>
				<Route path="/wipes" element={<SubcategoryPage name="Wipes" />} />
				<Route
					path="/casual-wear"
					element={<SubcategoryPage name="Casual Wear" />}
				/>
				<Route
					path="/formal-wear"
					element={<SubcategoryPage name="Formal Wear" />}
				/>
				<Route
					path="/mobile-phones"
					element={<SubcategoryPage name="Mobile Phones" />}
				/>
				<Route
					path="/computers"
					element={<SubcategoryPage name="Computers" />}
				/>
				<Route path="/tablets" element={<SubcategoryPage name="Tablets" />} />
				<Route path="/speakers" element={<SubcategoryPage name="Speakers" />} />
				<Route
					path="/beverages"
					element={<SubcategoryPage name="Beverages" />}
				/>
				<Route
					path="/office-furniture"
					element={<SubcategoryPage name="Office Furniture" />}
				/>
				<Route
					path="/oral-care"
					element={<SubcategoryPage name="Oral Care" />}
				/>
				<Route
					path="/hair-care"
					element={<SubcategoryPage name="Hair Care" />}
				/>
				<Route
					path="/antiperspirants"
					element={<SubcategoryPage name="Anstiperspirants" />}
				/>
				<Route path="/pet-food" element={<SubcategoryPage name="Pet Food" />} />
			</Routes>
		</div>
	);
}
