import React, { useState } from "react";
import SideBar from "../../components/SideBar/sidebar";
import MainDashboard from "../../components/MainDashboard/main-dashboard";

import "./dashboard.style.scss";

const Dashboard = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<>
			<div className="close" onClick={() => setHidden(!hidden)}>
				<span className="text-red">&times;</span>
			</div>
			<div className="dashboard-page">
				{hidden ? <SideBar hidden /> : <SideBar />}
				{hidden ? <MainDashboard expand /> : <MainDashboard />}
			</div>
		</>
	);
};

export default Dashboard;
