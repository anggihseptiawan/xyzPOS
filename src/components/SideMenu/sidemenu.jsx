import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/images/dashboard-24px.svg";
import { ReactComponent as ProductIcon } from "../../assets/images/product-24px.svg";
import { ReactComponent as ReportIcon } from "../../assets/images/report-24px.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/settings-24px.svg";

import "./sidemenu.style.scss";

const SideMenu = ({ title }) => {
	const Icon = () => {
		if (title === "Dashboard") {
			return <DashboardIcon />;
		} else if (title === "Produk") {
			return <ProductIcon />;
		} else if (title === "Laporan") {
			return <ReportIcon />;
		} else if (title === "Pengaturan") {
			return <SettingIcon />;
		}
	};

	return (
		<div className="menu">
			<div className="menu-title">
				<Icon />
				<span>{title}</span>
			</div>
			<div className="arrow">
				<span>&#10095;</span>
			</div>
		</div>
	);
};

export default SideMenu;
