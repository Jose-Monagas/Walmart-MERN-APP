import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import { FaSearch } from 'react-icons/fa';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';
function NavBar() {
    const [searchValue, setSearchValue] = useState('');
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const handleSearch = () => {
        console.log('Performing search:', searchValue);
    };

    const handleSignInClick = () => {
        setIsSignInModalOpen(true); // Open the modal when the button is clicked
    };

    const handleCloseModal = () => {
        setIsSignInModalOpen(false); // Close the modal
    };

    return (
        <nav className={styles.header_core}>
            {/* main logo */}
            <div className={styles.logo_core}>
            <Link to="/" className={styles.logo_core}>
                <img src="https://i.imgur.com/xgA0d20.png" alt="" />
            </Link>
            </div>
            {/* Search box */}
            <div className={styles.search_container}>
                <input
                    className={styles.header_searchInput}
                    type="text"
                    placeholder="Search everything at Fallmart online and in store"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className={styles.search_button} onClick={handleSearch}>
                    <FaSearch />
                </button>
            </div>
            {/* 4 links to the right */}
            <div className={styles.right_core}>
                <div className={styles.account}>
                    <a href="/account/order-tracking"> Orders </a>
                    <span> & </span>
                    <button className={styles.signbutton} onClick={handleSignInClick}> Sign In</button>
                </div>
                <div className={styles.humanicon}>
                    <img
                        src="https://i.imgur.com/l3cX5Ev.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                </div>
                <div className={styles.location}>
                    <img
                        src="https://i.imgur.com/gXCgwJG.jpg"
                        alt=""
                        width="30"
                        height="30"
                    />
                </div>
                <div className={styles.favorites}>
                    <img
                        src="https://i.imgur.com/UpoCDeP.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                </div>
                <div className={styles.cart}>
                    <img
                        src="https://i.imgur.com/TWI8Zuk.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                </div>
            </div>
            {/* Modal */}
            {isSignInModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={handleCloseModal}>
                            &times;
                        </span>
                        <SignUpForm closeModal={handleCloseModal} />
                    </div>
                </div>
            )}
        </nav>
    );

}
export default NavBar;
