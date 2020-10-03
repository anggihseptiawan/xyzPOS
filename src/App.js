import React from "react";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/dashboard" component={Dashboard} />
		</Switch>
	);
}

export default App;
