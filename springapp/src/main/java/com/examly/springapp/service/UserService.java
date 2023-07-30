package com.examly.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepo;
	
	public User addUser(User user) {
		return userRepo.save(user);
	}
	 public boolean isUserNameTaken(String userName) {
	   return userRepo.findByUserName(userName).isPresent();
	}

	 public boolean isEmailTaken(String email) {
	    return userRepo.findByEmail(email).isPresent();
	}
	 public User findUserByEmailAndPassword(String email, String password) {
	        return userRepo.findByEmailAndPassword(email, password).orElse(null);
	}
}