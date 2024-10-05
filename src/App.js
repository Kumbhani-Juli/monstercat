import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ourmusic from "./components/music/Ourmusic";
import Instinct from "./components/music/Instinct";
import Uncaged from "./components/music/Uncaged";
import Silk from "./components/music/Silk";
import Artists from "./components/Artist";
import AboutMonstercat from "./components/about/AboutMonstercat";
import Diversity from "./components/about/Diversity";
import Ethics from "./components/about/Ethics";
import Environment from "./components/about/Environmental";
import Contact from "./components/about/Contact";
import Newspage from "./components/NewsPage";
import Eventpage from "./components/EventsPage";
import UpcommingEvent from "./components/UpcommingEventsPage";
import PartnerShip from "./components/Partnership";
import LostCivilaization from "./components/Lost_civilaization";
import GoldPage from "./components/GoldPage";
import Press from "./components/presssections/PressTop";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ourmusic" element={<Ourmusic />} />
				<Route path="/instinct" element={<Instinct />} />{" "}
				<Route path="/uncaged" element={<Uncaged />} />
				<Route path="/silk" element={<Silk />} />
				<Route path="/artists" element={<Artists />} />{" "}
				<Route path="/aboutmonstercat" element={<AboutMonstercat />} />{" "}
				<Route path="/diversity" element={<Diversity />} />{" "}
				<Route path="/ethics" element={<Ethics />} />{" "}
				<Route path="/environment" element={<Environment />} />{" "}
				<Route path="/contact" element={<Contact />} />
				<Route path="/news" element={<Newspage />} />
				<Route path="/events" element={<Eventpage />} />{" "}
				<Route path="/upcomming-events" element={<UpcommingEvent />} />
				<Route path="/partnership" element={<PartnerShip />} />{" "}
				<Route path="/lostcivilaization" element={<LostCivilaization />} />{" "}
				<Route path="/gold" element={<GoldPage />} />{" "}
				<Route path="/press" element={<Press />} />{" "}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
