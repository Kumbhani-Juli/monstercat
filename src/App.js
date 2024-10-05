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
import ShopHeader from "./components/shop/shopheader";

import ShopFooter from "./components/shop/shopfooter";
import Shop from "./components/shop/Shop";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Header />
							<Home />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/ourmusic"
					element={
						<>
							<Header />
							<Ourmusic />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/instinct"
					element={
						<>
							<Header />
							<Instinct />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/uncaged"
					element={
						<>
							<Header />
							<Uncaged />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/silk"
					element={
						<>
							<Header />
							<Silk />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/artists"
					element={
						<>
							<Header />
							<Artists />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/aboutmonstercat"
					element={
						<>
							<Header />
							<AboutMonstercat />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/diversity"
					element={
						<>
							<Header />
							<Diversity />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/ethics"
					element={
						<>
							<Header />
							<Ethics />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/environment"
					element={
						<>
							<Header />
							<Environment />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/contact"
					element={
						<>
							<Header />
							<Contact />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/news"
					element={
						<>
							<Header />
							<Newspage />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/events"
					element={
						<>
							<Header />
							<Eventpage />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/upcomming-events"
					element={
						<>
							<Header />
							<UpcommingEvent />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/partnership"
					element={
						<>
							<Header />
							<PartnerShip />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/lostcivilaization"
					element={
						<>
							<Header />
							<LostCivilaization />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/gold"
					element={
						<>
							<Header />
							<GoldPage />
							<Footer />{" "}
						</>
					}
				/>{" "}
				<Route
					exact
					path="/press"
					element={
						<>
							<Header />
							<Press />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					exact
					path="/shop"
					element={
						<>
							<ShopHeader />
							<Shop />
							<ShopFooter />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
