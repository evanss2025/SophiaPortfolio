import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";



export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />} />
					<Route path="projects" element={<Projects />} />
					<Route path="contact" element={<Contact />} />

					
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);