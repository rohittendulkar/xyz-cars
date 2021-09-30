package com.lithan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.entities.Cars;
import com.lithan.service.CarService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/controller")

public class CarController {
	
	@Autowired
	CarService carService;
	
	@PostMapping("/api/cars")
		public Cars postCars (@RequestBody Cars car) {
			return carService.addCar(car);
		}
	
	@GetMapping("/api/cars")
	public List<Cars> getCars(){
		List<Cars> cars = carService.getAllCars();
		return cars;
	}
	
	@DeleteMapping("/api/cars/{id}")
	public void deleteCar(@PathVariable Integer id ) {
		carService.deleteCarById(id);
	}
	
	@GetMapping(value = "/api/cars/{id}")
	public Optional<Cars> findCarById(@PathVariable Integer id) {
		System.out.println("Get Car By Id");
		return carService.findCarById(id);
	}
	
	
	
	@RequestMapping(value = "/api/cars/{id}", 
			  produces = "application/json", 
			  method=RequestMethod.PUT)
			public Cars updateCar(@RequestBody Cars car,@PathVariable Integer id) {

				Optional<Cars> oldCar=carService.findCarById(id);
				if(oldCar.isPresent())
				{
					Cars obj=oldCar.get();
					obj.setCarmanufac(car.getCarmanufac());
					obj.setCarmodel(car.getCarmodel());
					obj.setCaryear(car.getCaryear());
					obj.setDescription(car.getDescription());
					obj.setSeller(car.getSeller());
					return carService.addCar(obj);
					
				}	
				else 
				{
					return carService.addCar(car);
				}
			}
	
	
	
	 @GetMapping("/api/cars/carsearch/{keyword}") 
	 public List<Cars> searchCars(@PathVariable("keyword") String keyword) {
	
		 List<Cars> car = carService.searchCars(keyword); 
		 return car; 
		 
	 
	 }
}
