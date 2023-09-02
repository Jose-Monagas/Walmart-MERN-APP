import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import SecondNav from './components/SecondNav/SecondNav';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import Furniture from './pages/Furniture/Furniture';
import DepartmentList from './components/DepartmentList/DepartmentList';



export default function App() {
    // const [departments, setDepartments] = useState([]);

	// const fetchDepts = async () => {
	// 	try {
	// 	  const response = await fetch('/api/department/showdepts'); 
	// 	  const data = await response.json();
	// 	  setDepartments(data);
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	//   };
	  
    // useEffect(() => {
	// 	fetchDepts();
	//   }, []);

	return (
		<div className="App">
			<HeaderBanner />
			<NavBar />
			<SecondNav />
			<PrimaryNav />
			<Routes>
				<Route path="/" element={<HomeImage />} />
				<Route path="/furniture" element={<Furniture />} />
			</Routes>
		</div>
	);
}
