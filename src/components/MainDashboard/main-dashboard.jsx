import React from "react";

import "./main-dashboard.style.scss";
import Panel from "../Panel/panel";
import Table from "../Table/table";
import { useSelector } from "react-redux";

const MainDashboard = ({ expand }) => {
	const globalState = useSelector((state) => state);

	const GetName = () => {
		const setName = globalState.currentUser.email.split("@");
		return setName[0];
	};

	return (
		<div className={`main-content ${expand ? "expand" : ""}`}>
			<p>Dashboard</p>
			<h2>
				Hallo,{" "}
				{globalState.currentUser.nama ? (
					globalState.currentUser.nama
				) : (
					<GetName />
				)}
			</h2>
			<div className="panel-info">
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
