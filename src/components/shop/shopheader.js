import React from "react";
import "../../assets/styles/shop/shopheader.css"; // Create a separate CSS file for styles if necessary
import shoplogo from "../../assets/images/shop/shoplogo.avif"; // Replace this with your actual logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import {
	faUser,
	faSearch,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons"; // Import required icons

const ShopHeader = () => {
	return (
		<header className="shop-header">
			<div className="shop-announcement">
				DISCOVER MONSTERCAT COLLECTIONS NOW!
			</div>
			<div className="shop-nav">
				<div className="shop-logo">
					<img src={shoplogo} alt="Shop Logo" />
				</div>
				<div className="shop-search">
					<FontAwesomeIcon icon={faUser} className="icon user-icon" />
					<FontAwesomeIcon icon={faSearch} className="icon search-icon" />
					<FontAwesomeIcon icon={faShoppingCart} className="icon cart-icon" />
				</div>
			</div>
		</header>
	);
};

export default ShopHeader;
