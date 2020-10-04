import React from "react";
import { ReactComponent as Item } from "../../assets/images/check_circle-24px.svg";

import "./card-product.style.scss";
import Button from "../Button/button";
import ModalBox from "../ModalBox/modal-box";
import { useState } from "react";

const CardProduct = ({ category, price, features, isBestSeller }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className={`card ${isBestSeller ? "scaleUp" : ""}`}>
				{isBestSeller && (
					<div className="card-top">
						<p>Best seller!</p>
					</div>
				)}
				<div className="card-body">
					<h3>{category}</h3>
					<h2>
						<sup>Rp</sup> <span>{price}</span> <small>/bulan</small>
					</h2>
					<div className="features">
						{features.map((feature) => {
							return (
								<div className="feature" key={feature.id}>
									<Item />
									<span>{feature}</span>
								</div>
							);
						})}
					</div>
					<Button
						className="yes"
						hasBackground
						btnBlock
						handleClick={() => setOpen(!open)}
					>
						Aku Mau!
					</Button>
				</div>
			</div>
			{open && <ModalBox type="signup" />}
		</>
	);
};

export default CardProduct;
