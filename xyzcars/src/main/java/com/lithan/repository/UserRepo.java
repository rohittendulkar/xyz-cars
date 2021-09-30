package com.lithan.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lithan.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
	User findByUserName(String username);
}
