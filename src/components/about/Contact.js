import React from "react";
import AboutContactTop from "./contact/aboutcontacttop";
import Accordian from "./contact/Accordion ";
import ContactForm from "./contact/Contactform";
import ContactFooter from "./contact/ContactFooter";
const contact = () => {
	return (
		<div>
			<AboutContactTop />
			<Accordian />
			<ContactForm />
			<ContactFooter />
		</div>
	);
};

export default contact;
