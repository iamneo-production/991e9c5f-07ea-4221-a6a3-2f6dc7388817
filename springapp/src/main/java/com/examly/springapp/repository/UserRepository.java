package com.example.recharge_scheme.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
	Optional<User> findByUserName(String userName);
	Optional<User> findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(Long id);
	
}

