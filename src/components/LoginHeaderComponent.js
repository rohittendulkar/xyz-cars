import React, { Component } from "react";

class LoginHeaderComponent extends Component {
	home() {
		this.props.history.push("/");
	}

	register() {
		this.props.history.push("/register");
	}

	login() {
		this.props.history.push("/login");
	}

	render() {
		return (
			<nav class="navbar navbar-dark navbar-expand-md bg-dark justify-content-center">
				<a href="/" class="navbar-brand mr-0">
					XYZ Cars Pte Ltd
				</a>
				<button
					class="navbar-toggler ml-1"
					type="button"
					data-toggle="collapse"
					data-target="#collapsingNavbar2"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="navbar-collapse collapse justify-content-between align-items-center w-100"
					id="collapsingNavbar2"
				>
					<ul class="navbar-nav mx-auto text-center">
						<li class="nav-item">
							<a
								class="nav-link"
								onClick={this.home.bind(this)}
								style={{ cursor: "pointer" }}
							>
								Home
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								onClick={this.register.bind(this)}
								style={{ cursor: "pointer" }}
							>
								Register
							</a>
						</li>
						<li class="nav-item">
							<a
								class="active nav-link"
								onClick={this.login.bind(this)}
								style={{ cursor: "pointer" }}
							>
								Login
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default LoginHeaderComponent;
