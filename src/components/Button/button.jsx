import React from "react";
import "./button.style.scss";

const Button = ({
	children,
	hasBackground,
	btnBlock,
	handleClick,
	changeColor,
}) => {
	return (
		<a
			href="#"
			className={`custom-button ${hasBackground ? "background" : ""} ${
				btnBlock ? "block" : ""
			} ${changeColor ? "change-color" : ""}`}
			onClick={handleClick}
		>
			{children}
		</a>
	);
};

export default Button;
