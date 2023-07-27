package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("api/admin")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@PostMapping("/review")
	ResponseEntity<Review> addReview(@RequestBody Review review){
		return new ResponseEntity<>(reviewService.addReview(review), HttpStatus.CREATED);
		
	}
	@GetMapping("/review")
	ResponseEntity<List<Review>> getAllReviews(){
		return new ResponseEntity<> (reviewService.getAllReviews(), HttpStatus.OK);
	}

}