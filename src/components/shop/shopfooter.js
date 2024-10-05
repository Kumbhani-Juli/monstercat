// Footer.js
import React from "react";
import "../../assets/styles/shop/shopfooter.css";
import {
	FaInstagram,
	FaWhatsapp,
	FaFacebook,
	FaTwitter,
	FaSpotify,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="shop-footer">
			<div className="shop-footer-container">
				{/* First Column */}
				<div className="shop-footer-column">
					<h3>FAQ</h3>
					<ul>
						<li>Shipping & Delivery</li>
						<li>Returns Portal</li>
						<li>Contact Us</li>
						<li>Terms of Service</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
				{/* Second Column */}
				<div className="shop-footer-column">
					<h3>Music</h3>
					<ul>
						<li>Artists</li>
						<li>Events</li>
						<li>Blog</li>
						<li>Radio</li>
						<li>Publishing</li>
						<li>Gold</li>
					</ul>
				</div>
				{/* Third Column */}
				<div className="shop-footer-column">
					<h3>Follow Us</h3>
					<div className="shop-social-icons">
						<FaInstagram className="shop-social-icon" />
						<FaWhatsapp className="shop-social-icon" />
						<FaFacebook className="shop-social-icon" />
						<FaTwitter className="shop-social-icon" />{" "}
						<FaSpotify className="shop-social-icon" />
						<FaYoutube className="shop-social-icon" />
					</div>
				</div>
				{/* Fourth Column */}
				<div className="shop-footer-column">
					<h3>JOIN THE FAMILY & GET 10% OFF YOUR ORDER</h3>
					<form className="shop-subscribe-form">
						<input
							type="email"
							placeholder="Email address"
							className="shop-subscribe-input"
						/>
						<button type="submit" className="shop-subscribe-button">
							SUBSCRIBE
						</button>
					</form>
					<p className="shop-consent-text">
						By checking this box, you agree to receive emails and communications
						from Monstercat. You can withdraw your consent any time by clicking
						the unsubscribe link in the footer of any email you receive from us,
						or by contacting us at support@monstercat.com.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
