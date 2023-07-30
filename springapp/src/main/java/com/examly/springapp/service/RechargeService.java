package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Recharge;
import com.examly.springapp.repository.RechargeRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.model.User;

@Service
public class RechargeService {

    @Autowired
	private RechargeRepository rechargeRepo;
	
	@Autowired
	private UserRepository userRepository;
	
<<<<<<< HEAD
	public void addRecharge(Recharge recharge, Long id) {
=======
	public void addRecharge(Long id, Recharge recharge) {
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
		 User user = userRepository.findById(id).orElse(null);
	     recharge.setUser(user);
	     rechargeRepo.save(recharge);
	}
	
	public List<Recharge> getRecharge(Long id){
		return rechargeRepo.findByUserId(id);
	}
	
	public Recharge getRechargeById(Long id) {
		return rechargeRepo.findById(id).get();
	}
}