import React from "react";
import { ReactComponent as UserIcon } from "../../assets/images/face-24px.svg";
import { ReactComponent as EmailIcon } from "../../assets/images/email-24px.svg";
import { ReactComponent as PasswordIcon } from "../../assets/images/password-24px.svg";

import "./form-input.style.scss";

const FormInput = ({ type, placeholder, handleChange }) => {
	const Icon = () => {
		if (placeholder === "Nama") {
			return <UserIcon />;
		} else if (placeholder === "Email") {
			return <EmailIcon />;
		} else if (placeholder === "Password") {
			return <PasswordIcon />;
		}
	};

	return (
		<div className="input-wrapper">
			<input
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
			/>
			<div className="icon">
				<Icon />
			</div>
		</div>
	);
};

export default FormInput;
