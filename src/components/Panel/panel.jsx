import React, { useState, useEffect } from "react";
import { SummaryData } from "../../assets/data";

import "./panel.style.scss";

const Panel = () => {
	const [summary, setSummary] = useState([]);

	useEffect(() => {
		// Simulasi pemanggilan api

		setSummary(SummaryData.data);
	}, []);

	return summary.map((sum) => {
		return (
			<div className="panel" key={sum.id}>
				<span>{sum.category}</span>
				<h3>{sum.value}</h3>
			</div>
		);
	});
};

export default Panel;
