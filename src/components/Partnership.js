import React from "react";
import PartnershipTop from "./partnership/partnershiptop";
import LogoPartnerSection from "./partnership/Logo_partnerSection";
import PartnerShipcontact from "../components/eventsPageSections/EventsPageContactSection";
import MusicSection from "./partnership/MusicForm";
const Partnership = () => {
	return (
		<div>
			<PartnershipTop />
			<LogoPartnerSection />
			<PartnerShipcontact />
			<MusicSection />
		</div>
	);
};

export default Partnership;
