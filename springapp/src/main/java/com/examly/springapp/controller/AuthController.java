package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.LoginRequest;
import com.examly.springapp.model.LoginResponse;
import com.examly.springapp.model.Message;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("api/user")
public class AuthController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody User user) {		
		if(userService.isEmailTaken(user.getEmail())) {
			return new ResponseEntity<> (new Message("Email is already taken!"), HttpStatus.CONFLICT);
		}
		
		if(userService.isUserNameTaken(user.getUserName())) {
			return new ResponseEntity<> (new Message("User name is already taken!"), HttpStatus.CONFLICT);
		}
		userService.addUser(user);
		return new ResponseEntity<> (new Message("user successfully added..."), HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse>login(@RequestBody LoginRequest loginRequest) {
		 String email = loginRequest.getEmail();
	        String password = loginRequest.getPassword();
	        User foundUser = userService.findUserByEmailAndPassword(email, password);
	        if (foundUser != null) {
	            return new ResponseEntity<>(new LoginResponse(true, foundUser.getRole(), foundUser.getId()), HttpStatus.CREATED);
	        } else {
	            return new ResponseEntity<>(new LoginResponse(false, null,0L), HttpStatus.CONFLICT);
	        }
	    }
}
