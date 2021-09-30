package com.lithan.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lithan.entities.Cars;
@Repository
public interface CarsRepo extends JpaRepository<Cars, Integer>{
	
	 @Query(value = 
	  
	  	"SELECT c FROM Cars c WHERE c.carmanufac LIKE '%' || :keyword || '%'"
	  	+ " OR c.carmodel LIKE '%' || :keyword || '%'"
		+ " OR c.caryear LIKE '%' || :keyword || '%'"
		+ " OR c.description LIKE '%' || :keyword || '%'"
		+ " OR c.seller LIKE '%' || :keyword || '%'"
	  )
    public List<Cars> search(@Param("keyword") String keyword);
	
}
