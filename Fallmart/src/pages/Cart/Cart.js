import { useState, useEffect, useRef } from 'react';
import * as productsAPI from '../../utilities/products-api';
import * as ordersAPI from '../../utilities/orders-api';
import styles from './Cart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../../components/Logo/Logo';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
// import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCat, setActiveCat] = useState('');
  const [cartItems, setCartItems] = useState(null);
//   const categoriesRef = useRef([]);
  const navigate = useNavigate();

//   useEffect(function() {
//     async function getItems() {
//       const items = await itemsAPI.getAll();
//       categoriesRef.current = items.reduce((cats, item) => {
//         const cat = item.category.name;
//         return cats.includes(cat) ? cats : [...cats, cat];
//       }, []);
//       setMenuItems(items);
//       setActiveCat(categoriesRef.current[0]);
//     }
//     getItems();
//     async function getCart() {
//       const cart = await ordersAPI.getCart();
//       setCart(cart);
//     }
//     getCart();
//   }, []);
  // Providing an empty 'dependency array'
  // results in the effect running after
  // the FIRST render only

  useEffect(() => {
			const fetchCart = async () => {
				try {
					const cart = await ordersAPI.getCart();
					console.log(cart.cartItems);
					setCartItems(cart.cartItems);
				} catch (error) {
					console.log('Error getting your cart', error);
				}
			};
			fetchCart();
		}, []);

  /*-- Event Handlers --*/
  async function handleAddToOrder(productId) {
    const updatedCart = await ordersAPI.addItemToCart(productId);
    setCartItems(updatedCart);
  }

  async function handleChangeQty(productId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(productId, newQty);
    setCartItems(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/account/order-tracking');
  }

  return (
    <main className={styles.NewOrderPage}>
      {/* <aside className={styles.aside}>
        
      <img className={styles.logo} src="/img/gorillaNoBackground.png" alt="logo" />
        <CategoryList
          categories={categoriesRef.current}
          cart={setCart}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className={styles.btnsm}>PREVIOUS ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside> */}
      {/* <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
      /> */}
      <OrderDetail
        order={cartItems}
        updateOrder={setCartItems}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </main>
  );
}











// import { useState, useEffect } from 'react';
// import styles from './Cart.module.scss';
// import * as ordersApi from '../../utilities/orders-api';
// export default function Cart(props) {
// 	const [cartItems, setCartItems] = useState([]);
// 	useEffect(() => {
// 		const fetchCart = async () => {
// 			try {
// 				const cart = await ordersApi.getCart();
// 				console.log(cart.cartItems);
// 				setCartItems(cart.cartItems);
// 			} catch (error) {
// 				console.log('Error getting your cart', error);
// 			}
// 		};
// 		fetchCart();
// 	}, []);

// 	return (
// 		<div className={styles.cart}>
// 			<h2>Shopping Cart</h2>
// 			<ul>
// 				{cartItems.map((cartItem) => (
// 					<li key={cartItem._id}>
// 						<p>{cartItem.item.name}</p>
// 						<p>Quantity:{cartItem.qty}</p>
// 					</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }
