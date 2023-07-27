package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Recharge;
import com.examly.springapp.service.RechargeService;

@RestController
@RequestMapping("/admin")
public class RechargeController {

	@Autowired
	private RechargeService rechargeService;
	
	@PostMapping("/recharge")
	public ResponseEntity<?> addRecharge(@RequestBody Recharge recharge){
		return new ResponseEntity<Recharge>(rechargeService.addRecharge(recharge), HttpStatus.CREATED);
	}
	
	@GetMapping("/recharge")
	public ResponseEntity<List<Recharge>> viewRecharge(){
//		System.out.println(rechargeService.getRecharge());
		return new ResponseEntity<>(rechargeService.getRecharge(), HttpStatus.OK);
	}
	
	
}