// Shop.js
import React from "react";
import "../../assets/styles/shop/shop.css";
import img1 from "../../assets/images/shop/img1.jpg";
import img2 from "../../assets/images/shop/img2.webp";
import img3 from "../../assets/images/shop/img3.webp";
import img4 from "../../assets/images/shop/img4.webp";
import img5 from "../../assets/images/shop/img5.webp";
import img6 from "../../assets/images/shop/img6.webp";
import img7 from "../../assets/images/shop/img7.webp";
import img8 from "../../assets/images/shop/img8.webp";
import img9 from "../../assets/images/shop/img9.webp";
import img10 from "../../assets/images/shop/img10.webp";
import img11 from "../../assets/images/shop/img11.webp";
import img12 from "../../assets/images/shop/img12.webp";
import mysteryimg from "../../assets/images/shop/mystery.webp";
const Shop = () => {
	const products = [
		{ id: 1, image: img1, price: "$20" },
		{ id: 2, image: img2, price: "$30" },
		{ id: 3, image: img3, price: "$40" },
		{ id: 4, image: img4, price: "$25" },
		{ id: 5, image: img5, price: "$35" },
		{ id: 6, image: img6, price: "$45" },
		{ id: 7, image: img7, price: "$50" },
		{ id: 8, image: img8, price: "$55" },
		{ id: 9, image: img9, price: "$60" },
		{ id: 10, image: img10, price: "$65" },
		{ id: 11, image: img11, price: "$50" },
		{ id: 12, image: img12, price: "$90" },
	];

	return (
		<div className="shop-container">
			{/* Background Image Section */}
			<div className="shop-bg-image">
				{/* Background image is handled via CSS */}
			</div>

			{/* MONSTERCAT FAVOURITES Section */}
			<section className="shop-intro">
				<h1>MONSTERCAT FAVOURITES</h1>
				<h2 className="shop-all">SHOP ALL</h2>
			</section>

			{/* Product Grid Section */}
			<section className="product-grid">
				{products?.map((product) => (
					<div className="product-card" key={product?.id}>
						<img
							src={product?.image}
							alt={`Product ${product.id}`}
							className="product-image"
						/>
						<p className="product-price">{product?.price}</p>
					</div>
				))}
			</section>

			<section className="mistery">
				<div className="mistery-info">
					<h1>Mystery Items!</h1>
					<p>Test your luck and save BIG!</p>
					<button>SHOP MEOW!</button>
				</div>{" "}
				<div className="mistery-image">
					<img src={mysteryimg} />
				</div>
			</section>
		</div>
	);
};

export default Shop;
