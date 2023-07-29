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
import org.springframework.web.bind.annotation.CrossOrigin;

import com.examly.springapp.model.Recharge;
import com.examly.springapp.model.Message;
import com.examly.springapp.service.RechargeService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("admin")
public class RechargeController {

	@Autowired
	private RechargeService rechargeService;
	
	@PostMapping("/recharge/{id}")
	public ResponseEntity<?> addRecharge(@PathVariable Long id, @RequestBody Recharge recharge){
		// System.out.println(id+"recharge id");
		rechargeService.addRecharge(id,recharge);
		return new ResponseEntity<>(new Message("recharge added successfully"), HttpStatus.CREATED);
	}
	
    @GetMapping("/recharge/{id}")
	public ResponseEntity<List<Recharge>> viewRecharge(@PathVariable Long id){
		List<Recharge> rechargeList = rechargeService.getRecharge(id);
		return new ResponseEntity<>(rechargeList, HttpStatus.OK);
	}
	
	
}