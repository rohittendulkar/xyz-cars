package com.lithan.service;

import java.util.List;
import java.util.Optional;

import com.lithan.entities.User;

public interface UserService {

	public void addUser(User user);
	public List<User> getUsers();
	public User loginCheck(String loginusername, String loginpassword);
}
