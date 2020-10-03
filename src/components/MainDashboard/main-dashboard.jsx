import React from "react";

import "./main-dashboard.style.scss";
import Panel from "../Panel/panel";
import Table from "../Table/table";

const MainDashboard = ({ expand }) => {
	return (
		<div className={`main-content ${expand ? "expand" : ""}`}>
			<p>Dashboard</p>
			<h2>Hallo Ahmad</h2>
			<div className="panel-info">
				<Panel />
				<Panel />
				<Panel />
				<Panel />
			</div>

			<div className="reporting">
				<p>Penjualan Hari Ini</p>
				<span>Kamis, 13 Agustus 2020</span>
				<div className="table-wrapper">
					<Table />
				</div>
			</div>
		</div>
	);
};

export default MainDashboard;
