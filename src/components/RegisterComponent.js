import React, { Component } from "react";
import UserService from "../services/UserService";

class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			uname: "",
			pass: "",
			uemail: "",
		};
	}

	nameChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ name: event.target.value });
	};

	usernameChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ uname: event.target.value });
	};

	passwordChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ pass: event.target.value });
	};

	emailChangeHandler = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		this.setState({ uemail: event.target.value });
	};

	saveUser = (event) => {
		event.preventDefault();
		console.log("Save User Method");

		let userobj = {
			name: this.state.name,
			userName: this.state.uname,
			password: this.state.pass,
			email: this.state.uemail,
		};

		console.log("This is save method " + this.state.id);
		UserService.registerUsers(userobj).then((resp) => {
			console.log("the response from spring is " + JSON.stringify(resp.data));
			console.log("the response from usrobj is " + JSON.stringify(userobj));
			this.props.history.push("/login");
		});
	};

	cancel() {
		this.props.history.push("/");
	}

	render() {
		return (
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							<h3 className="text-center" style={{ marginTop: "10px" }}>
								User Registration Form
							</h3>

							<div className="card-body">
								<form>
									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Name: </label>
										<input
											placeholder="Name"
											name="name"
											className="form-control"
											value={this.state.name}
											onChange={this.nameChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Username: </label>
										<input
											placeholder="Username"
											name="uname"
											className="form-control"
											value={this.state.uname}
											onChange={this.usernameChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Password: </label>
										<input
											placeholder="Password"
											name="pass"
											className="form-control"
											value={this.state.pass}
											onChange={this.passwordChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "10px" }}>
										<label style={{ marginBottom: "10px" }}> Email: </label>
										<input
											placeholder="Email"
											name="uemail"
											className="form-control"
											value={this.state.uemail}
											onChange={this.emailChangeHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.saveUser}
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

export default RegisterComponent;
