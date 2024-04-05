import "./App.css";
import Login from "./Components/Login/login";
import Home from "./Components/Home/Home";
import { Context } from "./Components/Context/Context";
import React from "react";

function App() {
	const { token, setToken } = React.useContext(Context);

	console.log(token);

	if (token) {
		return <Home />;
	} else {
		return <Login />;
	}
}

export default App;
