import React, { useState } from "react";
import { ReactComponent as Login } from "../../assets/images/login-illustration.svg";

import "./modal-box.style.scss";
import Button from "../Button/button";
import FormInput from "../FormInput/form-input";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hook/useForm";
import { useHistory } from "react-router-dom";

const ModalBox = ({ type }) => {
	const [open, setOpen] = useState(true);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();

	const globalState = useSelector((state) => state);
	console.log(globalState);

	const [form, setForm] = useForm({
		nama: "",
		email: "",
		password: "",
	});

	const handleClick = () => {
		dispatch({ type: "SIGN_IN", value: form });
		setLoading(true);
		setTimeout(() => {
			history.push("/dashboard");
			setLoading(false);
		}, 3000);
	};

	const ButtonText = () => {
		if (loading) {
			return "Loading";
		} else if (type === "signin") {
			return "Masuk";
		} else if (type === "signup") {
			return "Daftar";
		}
	};

	return (
		open && (
			<div className="modal">
				<div className="modal-body">
					<div className="close" onClick={() => setOpen(!open)}>
						<span>&times;</span>
					</div>
					<div className="content">
						<div className="img-login">
							<Login />
						</div>
						<div className="login">
							<h2>{type === "signin" ? "Masuk" : "Buat Akun"}</h2>
							<form action="#">
								<div className="form-group">
									{type === "signup" && (
										<FormInput
											type="text"
											placeholder="Nama"
											handleChange={(e) =>
												setForm("nama", e.target.value)
											}
										/>
									)}
									<FormInput
										type="email"
										placeholder="Email"
										handleChange={(e) =>
											setForm("email", e.target.value)
										}
									/>
									<FormInput
										type="password"
										placeholder="Password"
										handleChange={(e) =>
											setForm("password", e.target.value)
										}
									/>
									<div className="remember">
										<input type="checkbox" id="remember" />
										<label htmlFor="remember">
											Ingat Saya
										</label>
									</div>
								</div>

								<Button
									hasBackground
									btnBlock
									handleClick={handleClick}
								>
									{ButtonText()}
								</Button>
							</form>

							{type === "signin" ? (
								<p>
									Belum punya akun{" "}
									<a href="#" className="text-red">
										daftar
									</a>
								</p>
							) : (
								<p>
									Sudah punya akun ?{" "}
									<a href="#" className="text-red">
										masuk
									</a>
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default ModalBox;
