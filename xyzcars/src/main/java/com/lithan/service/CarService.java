package com.lithan.service;

import java.util.List;
import java.util.Optional;


import com.lithan.entities.Cars;

public interface CarService {

	public Cars addCar(Cars car);
	public List<Cars> getAllCars();
	public Optional<Cars>  findCarById(int id);
	public void  deleteCarById(int id);
	public List<Cars> searchCars(String keyword);
}
