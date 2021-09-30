import React, { Component } from "react";
import UserService from "../services/UserService";

class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			uname: "",
			pass: "",
			error_message: "",
		};
	}

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

	loginUser = (event) => {
		event.preventDefault();
		console.log("Login User Method");

		let userobj = {
			userName: this.state.uname,
			password: this.state.pass,
		};

		console.log("This is save method " + this.state.id);
		UserService.loginUsers(userobj).then((resp) => {
			console.log("the response from spring is " + JSON.stringify(resp.data));
			console.log("the response from usrobj is " + JSON.stringify(userobj));
			console.log(
				"the response from arrlen is " + JSON.stringify(resp.data.length)
			);

			if (resp.data.length === 0) {
				this.setState({ error_message: "User and Password do not match" });
			} else {
				this.props.history.push("/cars");
			}
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
							<h3 className="text-center" style={{ marginTop: "20px" }}>
								Login
							</h3>

							<div className="card-body">
								<form>
									<div className="form-group" style={{ marginBottom: "20px" }}>
										{this.state.error_message && (
											<div className="alert alert-danger" role="alert">
												{this.state.error_message}
											</div>
										)}
									</div>
									<div className="form-group" style={{ marginBottom: "20px" }}>
										<label style={{ marginBottom: "20px" }}> Username: </label>
										<input
											placeholder="Username"
											name="uname"
											className="form-control"
											value={this.state.uname}
											onChange={this.usernameChangeHandler}
										/>
									</div>

									<div className="form-group" style={{ marginBottom: "20px" }}>
										<label style={{ marginBottom: "20px" }}> Password: </label>
										<input
											placeholder="Password"
											name="pass"
											className="form-control"
											value={this.state.pass}
											onChange={this.passwordChangeHandler}
										/>
									</div>

									<button
										className="btn btn-success"
										onClick={this.loginUser}
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

export default LoginComponent;
