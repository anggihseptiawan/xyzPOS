import React, { useState } from "react";
import "./navbar.style.scss";
import Button from "../Button/button";
import ModalBox from "../ModalBox/modal-box";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [background, setBackground] = useState(false);
	const [color, setColor] = useState(false);

	window.addEventListener("scroll", function () {
		if (window.scrollY > 10) {
			setBackground(true);
			setColor(true);
		} else {
			setBackground(false);
			setColor(false);
		}
	});

	return (
		<div className={`nav-wrapper ${background ? "background" : ""}`}>
			<div className="container">
				<div className="logo">
					<a href="#" className="link">
						xyz<span>POS</span>
					</a>
				</div>
				<div className="nav-menu">
					<a href="#" className="link">
						Fitur
					</a>
					<a href="#" className="link">
						Berlangganan
					</a>
					{color ? (
						<Button
							className="masuk"
							handleClick={() => setOpen((prevOpen) => !prevOpen)}
							changeColor
						>
							Masuk
						</Button>
					) : (
						<Button
							className="masuk"
							handleClick={() => setOpen((prevOpen) => !prevOpen)}
						>
							Masuk
						</Button>
					)}
				</div>
			</div>
			{open && <ModalBox type="signin" />}
		</div>
	);
};

export default Navbar;
