import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

// import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import DepartmentList from './components/DepartmentList/DepartmentList';
import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import SubcategoryPage from './pages/SubcategoryPage/SubcategoryPage';
import * as deptApi from './utilities/dept-api';
import WishList from './components/WishList/WishList';
import Cart from '../src/pages/Cart/Cart';
export default function App() {
	const [departments, setDepartments] = useState([]);
	const [favoriteCount, setFavoriteCount] = useState(0);
	const [itemCount, setItemCount] = useState(0);
	const [showWishList, setShowWishList] = useState(false);
	const [showCart, setShowCart] = useState(false);

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

	const handleChangeWishlist = () => {
		setShowWishList(!showWishList);
	};
	const handleChangeCart = () => {
		setShowCart(!showCart);
	};
	return (
		<div className="App">
			<NavBar
				favoriteCount={favoriteCount}
				setShowWishList={handleChangeWishlist}
				itemCount={itemCount}
				setShowCart={handleChangeCart}
			/>
			<DepartmentList departments={departments} />
			{!showWishList ? (
				<Routes>
					<Route path="/" element={<HomeImage />} />
					<Route
						path="/:name"
						element={
							<SubcategoryPage
								setFavoriteCount={setFavoriteCount}
								favoriteCount={favoriteCount}
								showWishList={showWishList}
								setShowWishList={handleChangeWishlist}
								setItemCount={setItemCount}
								itemCount={itemCount}
							/>
						}
					/>
				</Routes>
			) : (
				<WishList setShowWishList={handleChangeWishlist} />
			)}
			{showCart && <Cart />}
		</div>
	);
}
