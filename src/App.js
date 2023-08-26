import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />
				<div className="content-body">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add" element={<Add />} />
						<Route path="/blogData/:id" element={<BlogDetail />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
