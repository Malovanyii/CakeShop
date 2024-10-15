import "./index.sass";
// import CustomButton from './shared/CustomButton/CustomButton';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
