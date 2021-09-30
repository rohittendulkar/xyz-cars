import React, { Component } from "react";
import CarService from "../services/CarService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faSearch,
	faEye,
} from "@fortawesome/free-solid-svg-icons";

class SearchCarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Car: [],
			keyword: this.props.match.params.keyword,
		};

		this.searchCar = this.searchCar.bind(this);
	}

	viewCar(carId) {
		this.props.history.push(`/view-cars/${carId}`);
	}

	componentDidMount() {
		CarService.searchCar(this.state.keyword).then((res) => {
			this.setState({ Car: res.data });
		});
	}

	changeSearchHandler = (event) => {
		console.log(event.target.value);
		this.setState({ keyword: event.target.value });
	};

	searchCar(keyword) {
		console.log("search Car Method " + keyword);
		this.props.history.push(`/search-cars/${keyword}`);
	}

	back() {
		this.props.history.push("/cars");
	}

	render() {
		return (
			<div>
				<h3
					className="text-center"
					style={{ marginBottom: "20px", marginTop: "20px" }}
				>
					Search Car Results
				</h3>
				<div className="container">
					<form
						className="form-inline d-flex justify-content-center"
						style={{ marginTop: "20px", marginBottom: "20px" }}
					>
						<div className="form-group">
							<button
								className="btn btn-primary"
								onClick={this.back.bind(this)}
								style={{ marginRight: "20px" }}
							>
								<FontAwesomeIcon icon={faArrowLeft} />
								&nbsp;Back to Car List
							</button>
						</div>
						<div class="form-group">
							<input
								className="form-control"
								type="search"
								placeholder="Search"
								aria-label="Search"
								value={this.state.keyword}
								onChange={this.changeSearchHandler}
							/>
						</div>
						<div class="form-group">
							<button
								onClick={() => this.searchCar(this.state.keyword)}
								className="btn btn-outline-success my-2 my-sm-0 "
								style={{ marginLeft: "10px" }}
							>
								Search &nbsp;
								<FontAwesomeIcon icon={faSearch} />
							</button>
						</div>
					</form>
				</div>

				<div className="row">
					<table className="table table-striped table-bordered">
						<thead>
							<tr className="text-center">
								<th>Car ID</th>
								<th> Car Manufacterer</th>
								<th> Car Model</th>
								<th> Car Year</th>
								<th> Car Description</th>
								<th> Seller</th>
								<th> Actions</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{this.state.Car.map((car) => (
								<tr key={car.id}>
									<td> {car.id} </td>
									<td> {car.carmanufac} </td>
									<td> {car.carmodel}</td>
									<td> {car.caryear}</td>
									<td> {car.description}</td>
									<td> {car.seller}</td>
									<td>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.viewCar(car.id)}
											className="btn btn-warning"
										>
											View &nbsp; <FontAwesomeIcon icon={faEye} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default SearchCarComponent;
