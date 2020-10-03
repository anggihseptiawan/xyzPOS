import React from "react";
import { ReactComponent as ImgUser } from "../../assets/images/account_circle-24px.svg";

import "./card-profile.style.scss";

const CardProfile = () => {
	return (
		<div className="card-profile">
			<div className="img-user">
				<ImgUser />
			</div>
			<div className="profile">
				<p>Ahmad Budi</p>
				<span>ahmadbudi@gmail.com</span>
				<a href="#" className="text-red">
					Keluar
				</a>
			</div>
		</div>
	);
};

export default CardProfile;
