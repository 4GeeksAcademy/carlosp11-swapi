import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { SwCard } from "./component/swcard.jsx";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SwList } from "./views/swlist.jsx";
import { SwDetail } from "./views/swdetail.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container-fluid bg-secondary">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<SwList />} />
						<Route path="swcard" element={<SwCard />} />
						<Route path="swlist" element={<SwList />} />
						<Route path="swdetail" element={<SwDetail />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
