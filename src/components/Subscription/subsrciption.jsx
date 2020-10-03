import React from "react";
import CardProduct from "../CardProduct/card-product";
import { DataProduct } from "../../assets/data";

import "./subscription.style.scss";

const Subscription = () => {
	const { data } = DataProduct;

	return (
		<div className="subscription-wrapper">
			<h2>Daftar sekarang dan nikmati fiturnya!</h2>
			<div className="all-product">
				{data.map((product) => {
					const {
						id,
						category,
						price,
						features,
						isBestSeller,
					} = product;
					return (
						<CardProduct
							key={id}
							category={category}
							price={price}
							features={features}
							isBestSeller={isBestSeller}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Subscription;
