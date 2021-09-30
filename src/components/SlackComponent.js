import React, { Component } from "react";
import UserService from "../services/UserService";

class SlackComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "rohit",
			mymessage: "",
			successAlert: "",
			errorAlert: "",
		};
	}

	changeMessageHandler = (event) => {
		console.log(event.target.value);
		this.setState({ mymessage: event.target.value });
	};

	sendMessage = (event) => {
		event.preventDefault();

		let message = { text: this.state.mymessage };

		console.log("User name is " + this.state.username);
		console.log("message  is " + JSON.stringify(message));

		UserService.sendMessage(this.state.username, message)
			.then((resp) =>
				this.setState({ successAlert: "Message Sent Successfully !" })
			)
			.catch((err) => {
				this.setState({ errorAlert: err.message });

				setTimeout(() => {
					this.props.history.push("/cars");
				}, 2000);
			});
	};

	cancel() {
		this.props.history.push("/cars");
	}

	render() {
		return (
			<div>
				<br />
				<br />
				<div className="card col-md-6 offset-md-3 offset-md-3 text-center">
					<div className="card-body">
						<form>
							<div>
								{this.state.successAlert && (
									<div className="alert alert-success" role="alert">
										{this.state.successAlert}
									</div>
								)}
								{this.state.errorAlert && (
									<div className="alert alert-danger" role="alert">
										{this.state.errorAlert}
									</div>
								)}
							</div>
							<div className="form-group" style={{ marginBottom: "10px" }}>
								<label style={{ marginBottom: "10px" }}>
									Send a message to reach out to our Support Team:
								</label>
								<textarea
									className="form-control col-md-6 offset-md-3 offset-md-3"
									style={{ width: "350px", height: "250px" }}
									placeholder="Type Your Message.."
									name="mymessage"
									onChange={this.changeMessageHandler}
								/>
							</div>
							<button
								className="btn btn-success"
								onClick={this.sendMessage}
								style={{ marginTop: "10px" }}
							>
								Send
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
		);
	}
}

export default SlackComponent;
