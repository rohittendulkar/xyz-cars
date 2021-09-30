import React, { Component } from "react";

class HomeComponent extends Component {
	register() {
		this.props.history.push("/register");
	}

	render() {
		return (
			<div
				style={{
					backgroundImage:
						"url('https://img.freepik.com/free-photo/front-view-generic-brandless-modern-car_110488-532.jpg?size=626&ext=jpg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: "-1",
					width: "100%",
					height: "600px",
				}}
			>
				<div
					class="d-flex justify-content-center align-items-center"
					style={{ height: "600px" }}
				>
					<h1 class="display-2 font-weight-bold text-white">
						Welcome to XYZ Cars
					</h1>
					<div style={{ position: "absolute", top: "450px" }}>
						<button
							className="btn btn-default"
							style={{
								width: "150px",
								height: "50px",
								background: "white",
								borderRadius: "25px",
								boxShadow: "0px 0px 40px 5px white",
							}}
							onClick={this.register.bind(this)}
						>
							Explore
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default HomeComponent;
