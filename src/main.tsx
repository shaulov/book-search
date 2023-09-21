import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store";
import { Provider } from "react-redux";
import "./styles/tailwind.css";

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
}
