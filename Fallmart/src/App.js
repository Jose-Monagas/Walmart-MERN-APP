import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import DepartmentList from './components/DepartmentList/DepartmentList';
// import './styles.scss';
import HomeImage from './components/HomeImage/HomeImage';
import SubcategoryPage from './pages/SubcategoryPage/SubcategoryPage';
import * as deptApi from './utilities/dept-api';
import WishList from './components/WishList/WishList';
import CheckOutPage from './pages/CheckOutPage/CheckoutOutPage';
import ProductPage from './pages/ProductPage/ProductPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import SearchResults from './components/SearchResults/SearchResults';
export default function App() {
	const [departments, setDepartments] = useState([]);
	const [favoriteCount, setFavoriteCount] = useState(0);
	const [itemCount, setItemCount] = useState(0);
	const [showWishList, setShowWishList] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const [showFallMart, setShowFallmart] = useState(false);
	const [searchResults, setSearchResults] = useState([]);
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
		<div className={styles.App}>
			<div className={styles.sticky}>
				<NavBar
					favoriteCount={favoriteCount}
					setShowWishList={handleChangeWishlist}
					itemCount={itemCount}
					setShowCart={handleChangeCart}
					showFallMart={showFallMart}
					setShowFallMart={setShowFallmart}
					searchResults={searchResults}
					setSearchResults={setSearchResults}
				/>
				<DepartmentList departments={departments} />
			</div>
			{!showWishList ? (
				<Routes>
					<Route path="/" element={<HomeImage />} />
					<Route
						path="/product/:id"
						element={
							<ProductPage
								setFavoriteCount={setFavoriteCount}
								setItemCount={setItemCount}
							/>
						}
					/>
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
					<Route path="/checkout" element={<CheckOutPage />} />
					<Route path="/history" element={<OrderHistoryPage />} />
					<Route
						path="/search"
						element={
							<SearchResults
								searchResults={searchResults}
								setFavoriteCount={setFavoriteCount}
								favoriteCount={favoriteCount}
								itemCount={itemCount}
								setItemCount={setItemCount}
							/>
						}
					/>
				</Routes>
			) : (
				<WishList setShowWishList={handleChangeWishlist} />
			)}
			{/* {showCart && <Cart />} */}
		</div>
	);
}
