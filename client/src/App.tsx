import React from "react";
import ItemCard from "./entities/ItemCard/ItemCard";
import "./index.css";
import BakerCard from "./entities/BakerCard/BakerCard";
import ArticleCard from "./entities/ArticleCard/ArticleCard";
import SelectAnotherArticleCard from "./entities/SelectAnotherArticleCard/SelectAnotherArticleCard";
// import CustomButton from './shared/CustomButton/CustomButton';
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route />
			</Routes>
			<div className="cards">
				<ItemCard></ItemCard>
				<BakerCard></BakerCard>
				<BakerCard styles="aside"></BakerCard>
				<ArticleCard></ArticleCard>
			</div>

			<div className="cards">
				<SelectAnotherArticleCard styles="aside" />
			</div>
			<Footer />
		</div>
	);
}

export default App;
