
package com.examly.springapp.repository;

import java.util.Optional;
import com.examly.springapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
	Optional<User> findByUserName(String userName);
	Optional<User> findByEmailAndPassword(String email, String password);
	Optional<User> findByEmail(Long id);
	
}
