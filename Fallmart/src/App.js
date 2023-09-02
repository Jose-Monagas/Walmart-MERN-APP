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

export default function App() {
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
