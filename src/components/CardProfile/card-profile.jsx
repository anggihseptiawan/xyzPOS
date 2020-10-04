import React from "react";
import { ReactComponent as ImgUser } from "../../assets/images/account_circle-24px.svg";

import "./card-profile.style.scss";
import { useSelector, useDispatch } from "react-redux";

const CardProfile = () => {
	const globalState = useSelector((state) => state);
	const dispatch = useDispatch();
	console.log(globalState);

	const GetName = () => {
		const setName = globalState.currentUser.email.split("@");
		return setName[0];
	};

	const signOut = () => {
		dispatch({ type: "SIGN_OUT", value: null });
	};

	return (
		<div className="card-profile">
			<div className="img-user">
				<ImgUser />
			</div>
			<div className="profile">
				<p>
					{globalState.currentUser.nama ? (
						globalState.currentUser.nama
					) : (
						<GetName />
					)}
				</p>
				<span>{globalState.currentUser.email}</span>
				<a href="#" className="text-red" onClick={signOut}>
					Keluar
				</a>
			</div>
		</div>
	);
};

export default CardProfile;
