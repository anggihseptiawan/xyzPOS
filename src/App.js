import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

function App() {
	const globalState = useSelector((state) => state);
	console.log(globalState.currentUser);

	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route
				exact
				path="/dashboard"
				render={() =>
					globalState.currentUser === null ? (
						<Redirect to="/" />
					) : (
						<Dashboard />
					)
				}
			/>{" "}
			/>
		</Switch>
	);
}

export default App;
