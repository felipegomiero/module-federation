import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes.js";

export default function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}
