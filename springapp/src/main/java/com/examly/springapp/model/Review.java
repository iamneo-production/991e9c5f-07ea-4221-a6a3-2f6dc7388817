package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name="review_model")
public class Review {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String username;
	private String review;
	private Integer rating;
	
	public Review() {
		
	}
	public Review(Integer id, String username, String review, Integer rating) {
		this.id = id;
		this.username = username;
		this.review = review;
		this.rating = rating;
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}	
}
