import React from "react";
import Button from "../Button/button";

import "./table.style.scss";

const Table = () => {
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
				<tr>
					<td>09:21</td>
					<td>Budi Cahyadi</td>
					<td>Kipas Angin</td>
					<td>Rp. 100.000</td>
					<td>2</td>
					<td>Rp. 200.000</td>
					<td>
						<Button hasBackground>Lihat detail</Button>
					</td>
				</tr>
				<tr>
					<td>15:30</td>
					<td>Ahmad Budi</td>
					<td>Sapu ijuk</td>
					<td>Rp. 10.000</td>
					<td>1</td>
					<td>Rp. 10.000</td>
					<td>
						<Button hasBackground>Lihat detail</Button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
