import React, { Component } from "react";
class FooterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<footer className="footer text-center" style={{ marginTop: "30px" }}>
					<span className="text-muted">
						XYZ Cars - All Rights Reserved 2020
					</span>
				</footer>
			</div>
		);
	}
}
export default FooterComponent;
