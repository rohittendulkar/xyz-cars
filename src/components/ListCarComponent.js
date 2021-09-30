import React, { Component } from "react";
import CarService from "../services/CarService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEdit,
	faPlus,
	faEye,
	faSearch,
	faTrash,
	faSignOutAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

class ListCarComponent extends Component {
	constructor(props) {
		super(props);
		this.state = { carlist: [] };
		this.home = this.home.bind(this);
		this.addCar = this.addCar.bind(this);
		this.viewCar = this.viewCar.bind(this);
		this.editCar = this.editCar.bind(this);
		this.deleteCar = this.deleteCar.bind(this);
	}

	deleteCar(id) {
		CarService.deleteCar(id).then(() => {
			let carlist = this.state.carlist.filter((car) => car.id !== id);
			this.setState({ carlist });
			// let carlist = this.state.carlist;
			// carlist.data.filter((car) => car.id !== id);
			// this.setState({ carlist: carlist });
		});
	}

	viewCar(cid) {
		console.log("This is update Car" + cid);
		this.props.history.push(`view-cars/${cid}`);
	}

	home() {
		this.props.history.push(`/`);
	}

	addCar() {
		this.props.history.push(`add-cars/add`);
	}

	searchCar() {
		this.props.history.push(`/search`);
	}

	message() {
		this.props.history.push(`/message`);
	}

	editCar(cid) {
		console.log("This is update Car" + cid);
		this.props.history.push(`add-cars/${cid}`);
	}

	componentDidMount() {
		CarService.getCars().then((resp) => {
			this.setState({ carlist: resp.data });
		});
	}

	render() {
		return (
			<div>
				<h2
					className="text-center"
					style={{ marginTop: "20px", marginBottom: "20px" }}
				>
					Car List
				</h2>
				<div className="d-flex justify-content-center">
					<button className="btn btn-danger" onClick={this.home}>
						Log out &nbsp;
						<FontAwesomeIcon icon={faSignOutAlt} />
					</button>

					<button
						className="btn btn-success"
						onClick={this.addCar}
						style={{ marginLeft: "10px" }}
					>
						Add Car &nbsp;
						<FontAwesomeIcon icon={faPlus} />
					</button>
					<button
						className="btn btn-info"
						onClick={this.searchCar.bind(this)}
						style={{ marginLeft: "10px" }}
					>
						Search Car &nbsp;
						<FontAwesomeIcon icon={faSearch} />
					</button>
					<button
						className="btn btn-warning"
						onClick={this.message.bind(this)}
						style={{ marginLeft: "10px" }}
					>
						Message Us &nbsp;
						<FontAwesomeIcon icon={faEnvelope} />
					</button>
				</div>
				<br></br>
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
							{this.state.carlist.map((car) => (
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
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.editCar(car.id)}
											className="btn btn-success"
										>
											Update &nbsp; <FontAwesomeIcon icon={faEdit} />
										</button>
										<button
											style={{ marginLeft: "10px" }}
											onClick={() => this.deleteCar(car.id)}
											className="btn btn-danger"
										>
											Delete &nbsp;
											<FontAwesomeIcon icon={faTrash} />
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

export default ListCarComponent;
