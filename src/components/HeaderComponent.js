import React, { Component } from "react";
class HeaderComponent extends Component {
	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-expand-md navbar-dark bg-dark ">
						<div className="mx-auto order-0">
							<a href="#" className="navbar-brand mx-auto">
								XYZ Cars Pte Ltd
							</a>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}
export default HeaderComponent;
