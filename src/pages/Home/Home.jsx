import React from "react";
import Navbar from "../../components/Navbar/navbar";
import HeroSection from "../../components/HeroSection/hero-section";
import Subscription from "../../components/Subscription/subsrciption";
import Footer from "../../components/Footer/footer";

const Home = () => {
	return (
		<div className="App">
			<div className="container">
				<Navbar />
				<HeroSection />
				<Subscription />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
