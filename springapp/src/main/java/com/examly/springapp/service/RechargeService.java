package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Recharge;
import com.examly.springapp.repository.RechargeRepository;

@Service
public class RechargeService {

	@Autowired
	private RechargeRepository rechargeRepo;
	
	public Recharge addRecharge(Recharge recharge) {
		return rechargeRepo.save(recharge);
	}
	
	public List<Recharge> getRecharge(){
		return rechargeRepo.findAll();
	}
	
	public Recharge getRechargeById(int id) {
		return rechargeRepo.findById(id).get();
	}
}