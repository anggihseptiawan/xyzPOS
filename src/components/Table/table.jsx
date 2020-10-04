import React, { useState, useEffect } from "react";
import Button from "../Button/button";

import "./table.style.scss";
import { ReportData } from "../../assets/data";

const Table = () => {
	const [reporting, setReporting] = useState([]);

	useEffect(() => {
		// Simulasi pemanggilan API

		setReporting(ReportData.data);
	}, []);

	return (
		<table>
			<thead>
				<tr>
					<th>Jam</th>
					<th>Customer</th>
					<th>Barang</th>
					<th>Harga Barang</th>
					<th>Qty</th>
					<th>Total</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{reporting.map((item) => {
					const {
						id,
						jam,
						customer,
						barang,
						harga,
						qty,
						total,
					} = item;
					return (
						<tr key={id}>
							<td>{jam}</td>
							<td>{customer}</td>
							<td>{barang}</td>
							<td>{harga}</td>
							<td>{qty}</td>
							<td>{total}</td>
							<td>
								<Button hasBackground>Lihat detail</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
