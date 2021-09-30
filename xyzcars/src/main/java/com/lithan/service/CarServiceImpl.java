package com.lithan.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lithan.entities.Cars;
import com.lithan.repository.CarsRepo;

@Service
@Transactional
public class CarServiceImpl implements CarService {

	@Autowired CarsRepo carrepo;

	@Override
	public Cars addCar(Cars car) {
		// TODO Auto-generated method stub
		return carrepo.save(car);
	}

	@Override
	public List<Cars> getAllCars() {
		// TODO Auto-generated method stub
		List <Cars> car = carrepo.findAll();
		return car;
	}

	@Override
	public Optional<Cars> findCarById(int id) {
		// TODO Auto-generated method stub
		return carrepo.findById(id);
	}

	@Override
	public void deleteCarById(int id) {
		// TODO Auto-generated method stub
		carrepo.deleteById(id);
	}

	@Override
	public List<Cars> searchCars(String keyword) {
		List<Cars> car = carrepo.search(keyword);
		return car;
	}
	
	
}
