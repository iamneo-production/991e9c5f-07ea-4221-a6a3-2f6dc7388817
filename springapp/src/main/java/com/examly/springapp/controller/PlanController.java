package com.examly.springapp.controller;

import com.examly.springapp.repository.PlanRepo;
import com.examly.springapp.model.Plan;

import java.util.Optional;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders="*")
@RequestMapping
public class PlanController {

    @Autowired
	public PlanRepo planrepo;
	

    @GetMapping("/admin/plan")
	public List<Plan> getPlanAll(){
		return planrepo.findAll();
	}

	@PostMapping("/admin/plan")
	public Plan addDetails(@RequestBody Plan addplan){
		return planrepo.save(addplan);
	}

	@GetMapping("/admin/plan/{id}")
	public Optional<Plan> viewDetails(@PathVariable Long id) {
		return planrepo.findById(id);
	}

	@PutMapping("/admin/plan/{id}")
	public Plan updateDetails(@PathVariable Long id, @RequestBody Plan plandetails){
    Plan plan=planrepo.findById(id).orElseThrow(() -> new NoSuchElementException("Plan does not exist with id : "+id));
    
    plan.setPlanType(plandetails.getPlanType());
    plan.setPlanName(plandetails.getPlanName());
    plan.setPlanValidity(plandetails.getPlanValidity());
    plan.setPlanDetails(plandetails.getPlanDetails());
    plan.setPlanPrice(plandetails.getPlanPrice());
    plan.setPlanOffer(plandetails.getPlanOffer());

    return planrepo.save(plan);
	}

	@DeleteMapping("/admin/plan/{id}")
	public void deleteDetails(@PathVariable Long id) {
		planrepo.deleteById(id);
	}

}
