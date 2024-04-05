import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
	const [token, setToken] = React.useState(
		JSON.parse(window.localStorage.getItem("access_token")) || false,
	);

	React.useEffect(() => {
		if (token) {
			window.localStorage.setItem("access_token", JSON.stringify(token));
		} else {
			window.localStorage.removeItem("access_token");
		}
	}, [token]);
	return (
		<Context.Provider value={{ token, setToken }}>
			{children}
		</Context.Provider>
	);
};

export { Provider, Context };
