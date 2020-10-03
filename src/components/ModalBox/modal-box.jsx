import React, { useState } from "react";
import { ReactComponent as Login } from "../../assets/images/login-illustration.svg";

import "./modal-box.style.scss";
import Button from "../Button/button";
import FormInput from "../FormInput/form-input";

const ModalBox = ({ type }) => {
	const [open, setOpen] = useState(true);

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
										/>
									)}
									<FormInput
										type="email"
										placeholder="Email"
									/>
									<FormInput
										type="password"
										placeholder="Password"
									/>
									<div className="remember">
										<input type="checkbox" id="remember" />
										<label htmlFor="remember">
											Ingat Saya
										</label>
									</div>
								</div>

								<Button hasBackground btnBlock>
									{type === "signin" ? "Masuk" : "Daftar"}
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
