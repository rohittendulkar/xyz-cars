import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user";
const SLACK_API = "http://localhost:8080/messages";

class UserService {
	registerUsers(user) {
		console.log("Add Users");
		return axios.post(USER_API_BASE_URL + "/register", user);
	}

	loginUsers(user) {
		console.log("Login User");
		return axios.post(USER_API_BASE_URL + "/login", user);
	}

	sendMessage(username, message) {
		console.log("Send Message Service");
		console.log("Username is: " + username);
		console.log("Message is: " + message);

		return axios.post(SLACK_API + "/" + username, message);
	}
}

export default new UserService();
