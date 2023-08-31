import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HeaderBanner from './components/HeaderBanner/HeaderBanner';
import PrimaryNav from './components/PrimaryNav/PrimaryNav';
import SecondNav from './components/SecondNav/SecondNav';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';

export default function App() {
	return (
		<div className="App">
			<Router>
				<HeaderBanner />
				<NavBar />
				<SecondNav />
				<PrimaryNav />
				<HomeImage />
			</Router>
		</div>
	);
}
