import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListCarComponent from "./components/ListCarComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateUpdateCarComponent from "./components/CreateUpdateCarComponent";
import ViewCarComponent from "./components/ViewCarComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import SearchCarComponent from "./components/SearchCarComponent";
import HomeComponent from "./components/HomeComponent";
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import RegisterHeaderComponent from "./components/RegisterHeaderComponent";
import LoginHeaderComponent from "./components/LoginHeaderComponent";
import SlackComponent from "./components/SlackComponent";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={HomeHeaderComponent}></Route>
					<Route path="/register" component={RegisterHeaderComponent}></Route>
					<Route path="/login" component={LoginHeaderComponent}></Route>
					<Route path="/cars" component={HeaderComponent} />
					<Route path="/search" component={HeaderComponent} />
					<Route path="/search-cars/:keyword" component={HeaderComponent} />
					<Route path="/message" component={HeaderComponent} />
				</Switch>
				<div>
					<Switch>
						{/* UI */}
						<Route path="/" exact component={HomeComponent}></Route>
						{/* Car Route */}
						<Route path="/cars" component={ListCarComponent}></Route>
						<Route
							path="/add-cars/:cid"
							component={CreateUpdateCarComponent}
						></Route>
						<Route path="/view-cars/:cid" component={ViewCarComponent}></Route>
						<Route
							path="/search-cars/:keyword"
							component={SearchCarComponent}
						></Route>

						<Route path="/search" component={SearchCarComponent}></Route>

						{/* User Route */}
						<Route path="/register" component={RegisterComponent}></Route>
						<Route path="/login" component={LoginComponent}></Route>

						{/* Slack Integration */}
						<Route path="/message" component={SlackComponent}></Route>
					</Switch>
				</div>
				<FooterComponent />
			</Router>
		</div>
	);
}
export default App;
