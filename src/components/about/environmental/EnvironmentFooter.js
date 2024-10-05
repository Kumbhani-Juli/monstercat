import React, { useState, useEffect } from "react";
import "../../../assets/styles/about/environmental/environmentfooter.css"; // Import the CSS for this component.
import gridImage1 from "../../../assets/images/about/aboutmonstercat/diversity.webp";
import gridImage2 from "../../../assets/images/about/aboutmonstercat/environmental.webp";
import gridImage3 from "../../../assets/images//about/aboutmonstercat/ethics.webp";
import gridImage4 from "../../../assets/images/about/aboutmonstercat/about.jfif";
import gridImage5 from "../../../assets/images/about/aboutmonstercat/contact.webp";

const EthicFooter = () => {
	const gridImages = [
		gridImage1,
		gridImage2,
		gridImage3,
		gridImage4,
		gridImage5,
	];
	const buttonNames = [
		"Diversity",
		"Environmental",
		"Ethics",
		"About Us",
		"Contact Us",
	];

	return (
		<div className="environment-main-container">
			{/* Second Section: Logos and Image Grid */}
			<div className="environment-grid-section">
				<div className="environment-image-grid">
					{gridImages.map((image, index) => (
						<div key={index} className="environment-grid-item">
							<img src={image} alt={`Grid ${index + 1}`} />
							<button className="environment-image-button">
								{buttonNames[index]}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EthicFooter;
