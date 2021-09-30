import React, { Component } from "react";
import CarService from "../services/CarService";

class CreateUpdateCarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.cid,
			cmanufac: "",
			cmodel: "",
			cyear: "",
			desc: "",
			slr: "",
		};
		console.log("this prints " + this.state.id);
	}

	carmanufacHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ cmanufac: event.target.value });
	};

	carmodelHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ cmodel: event.target.value });
	};

	caryearHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ cyear: event.target.value });
	};

	descriptionHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ desc: event.target.value });
	};

	sellerHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ slr: event.target.value });
	};

	saveOrUpdateCar = (e) => {
		e.preventDefault();
		console.log("this is save method");

		let car = {
			carmanufac: this.state.cmanufac,
			carmodel: this.state.cmodel,
			caryear: this.state.cyear,
			description: this.state.desc,
			seller: this.state.slr,
		};

		if (this.state.id === "add") {
			console.log("This is save method " + this.state.id);
			CarService.createCar(car).then((resp) => {
				console.log("the response from spring is " + JSON.stringify(resp.data));
				this.props.history.push("/cars");
			});
		} else {
			console.log("This is update method " + this.state.id);
			CarService.update(this.state.id, car).then((resp) => {
				console.log("the response from spring is " + JSON.stringify(resp.data));
				this.props.history.push("/cars");
			});
		}
	};

	cancel() {
		this.props.history.push("/cars");
	}

	componentDidMount() {
		if (this.state.id === "add") {
			return;
		} else {
			CarService.viewCar(this.state.id).then((resp) => {
				console.log(
					" Component Didmount the car details " + JSON.stringify(resp.data)
				);
				let car = resp.data;

				this.setState({
					cmanufac: car.carmanufac,
					cmodel: car.carmodel,
					cyear: car.caryear,
					desc: car.description,
					slr: car.seller,
				});
			});
		}
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h3 className="text-center" style={{ marginTop: "10px" }}>
								ID is {this.state.id}
							</h3>

							<div className="card-body">
								<form>
									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>
											{" "}
											Car Manufacterer:{" "}
										</label>
										<input
											placeholder="Car Manufacterer"
											name="cmanufac"
											className="form-control"
											value={this.state.cmanufac}
											onChange={this.carmanufacHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Car Model: </label>
										<input
											placeholder="Car Model"
											name="cmodel"
											className="form-control"
											value={this.state.cmodel}
											onChange={this.carmodelHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Car Year: </label>
										<input
											placeholder="Car Year"
											name="cyear"
											className="form-control"
											value={this.state.cyear}
											onChange={this.caryearHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}>
											{" "}
											Description:{" "}
										</label>
										<input
											placeholder="Description"
											name="desc"
											className="form-control"
											value={this.state.desc}
											onChange={this.descriptionHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Seller: </label>
										<input
											placeholder="Seller"
											name="slr"
											className="form-control"
											value={this.state.slr}
											onChange={this.sellerHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.saveOrUpdateCar}
										style={{ marginTop: "10px" }}
									>
										Save
									</button>
									<button
										className="btn btn-danger"
										onClick={this.cancel.bind(this)}
										style={{ marginTop: "10px", marginLeft: "10px" }}
									>
										Cancel
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CreateUpdateCarComponent;
