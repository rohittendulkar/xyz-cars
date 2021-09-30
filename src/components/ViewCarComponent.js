import React, { Component } from "react";
import CarService from "../services/CarService";

class ViewCarComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.cid,
			car: {},
		};
	}

	componentDidMount() {
		CarService.viewCar(this.state.id).then((resp) => {
			console.log("response data from backend " + JSON.stringify(resp.data));
			this.setState({ car: resp.data });
		});
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="card col-md-6 offset-md-3">
					<h3
						className="text-center"
						style={{ marginTop: "20px", marginBottom: "20px" }}
					>
						View Car Details
					</h3>
					<div className="card-body">
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Car Manufacterer: </label>
							<div
								class="d-inline p-2 bg-dark text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.car.carmanufac}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Car Model: </label>
							<div
								class="d-inline p-2 bg-dark text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.car.carmodel}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Car Year: </label>
							<div
								class="d-inline p-2 bg-dark text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.car.caryear}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Description: </label>
							<div
								class="d-inline p-2 bg-dark text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.car.description}
							</div>
						</div>
						<div
							className="row-inline text-center"
							style={{ marginBottom: "20px" }}
						>
							<label> Seller: </label>
							<div
								class="d-inline p-2 bg-dark text-white"
								style={{ marginLeft: "20px" }}
							>
								{this.state.car.seller}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ViewCarComponent;
