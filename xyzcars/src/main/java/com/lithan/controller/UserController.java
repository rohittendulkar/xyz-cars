package com.lithan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lithan.entities.User;
import com.lithan.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired 
	UserService userService;
	
	@PostMapping("/register")
	public void addUsers(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@GetMapping("/register")
	List<User> getUsers(){
		System.out.println("Getting Users");
		return userService.getUsers();
	}
	
	@PostMapping("/login")
	public User loginController(@RequestBody User userlogin) {
		System.out.println("The login username is: "+userlogin.getUserName());
		System.out.println("The login password is: "+userlogin.getPassword());
		
		String loginusername = userlogin.getUserName();
		String loginpassword = userlogin.getPassword();
		
		User user = userService.loginCheck(loginusername, loginpassword);
		return user;
	}
}
