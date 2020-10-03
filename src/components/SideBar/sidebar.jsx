import React from "react";
import SideMenu from "../SideMenu/sidemenu";

import "./sidebar.style.scss";
import CardProfile from "../CardProfile/card-profile";

const SideBar = ({ hidden }) => {
	return (
		<>
			<div className={`sidebar ${hidden ? "hide" : ""}`}>
				<CardProfile />
				<SideMenu title="Dashboard" />
				<SideMenu title="Produk" />
				<SideMenu title="Laporan" />
				<SideMenu title="Pengaturan" />
			</div>
		</>
	);
};

export default SideBar;
