import axios from "axios";

const CAR_API_BASE_URL = "http://localhost:8080/controller/api/cars";

class CarService {
	getCars() {
		console.log("Get all Cars");
		return axios.get(CAR_API_BASE_URL);
	}

	viewCar(carId) {
		console.log("Getting Cars By Id" + carId);
		return axios.get(CAR_API_BASE_URL + "/" + carId);
	}

	createCar(cars) {
		console.log("Create Car Posting");
		return axios.post(CAR_API_BASE_URL, cars);
	}

	update(carId, cars) {
		console.log("Update Car Posting " + carId);
		return axios.put(CAR_API_BASE_URL + "/" + carId, cars);
	}

	deleteCar(carId) {
		console.log("Delete Car Posting " + carId);
		return axios.delete(CAR_API_BASE_URL + "/" + carId);
	}

	searchCar(keyword) {
		console.log("Search Car Posting " + keyword);
		return axios.get(CAR_API_BASE_URL + "/carsearch/" + keyword);
	}
}

export default new CarService();
