import React, { useState } from "react";
import { ReactComponent as Hero } from "../../assets/images/hero-section-illustration.svg";
import Button from "../Button/button";

import "./hero-section.style.scss";
import ModalBox from "../ModalBox/modal-box";

const HeroSection = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="hero-wrapper">
			<div className="description">
				<h1>
					Solusi terbaik untuk <span>mengelola usaha</span> kamu!
				</h1>
				<div className="cta">
					<Button hasBackground handleClick={() => setOpen(!open)}>
						Daftar Sekarang
					</Button>
					<Button handleClick={() => window.scrollTo(0, 600)}>
						Pelajari Dulu!
					</Button>
				</div>
			</div>
			<div className="hero-image">
				<Hero />
			</div>
			{open && <ModalBox type="signup" />}
		</div>
	);
};

export default HeroSection;
