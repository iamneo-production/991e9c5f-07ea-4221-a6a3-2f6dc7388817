package com.examly.springapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Review;
import com.examly.springapp.repository.ReviewRepo;

@Service
public class ReviewService {
    
    @Autowired
	private ReviewRepo reviewRepo;
	
	public Review addReview(Review review) {
		return reviewRepo.save(review);
	}
	
	public List<Review> getAllReviews(){
		return reviewRepo.findAll();
	}
	
	public Review getReviewById(int id) {
		return reviewRepo.findById(id).get();
	}	
}
