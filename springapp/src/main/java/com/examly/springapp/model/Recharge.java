package com.examly.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="recharge_model")
public class Recharge {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String rechargeType;
	private String mobile;
	private String name;
	private String email;
	private String rechargePlan;
	private Integer rechargePrice;
	@ManyToOne
    @JoinColumn(name = "user_id")
	@JsonBackReference
    private User user;
	
	public Recharge() {
		
	}

	

	public Recharge(Long id, String rechargeType, String mobile, String name, String email, String rechargePlan,
			Integer rechargePrice, User user) {
		this.id = id;
		this.rechargeType = rechargeType;
		this.mobile = mobile;
		this.name = name;
		this.email = email;
		this.rechargePlan = rechargePlan;
		this.rechargePrice = rechargePrice;
		this.user = user;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRechargeType() {
		return rechargeType;
	}

	public void setRechargeType(String rechargeType) {
		this.rechargeType = rechargeType;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRechargePlan() {
		return rechargePlan;
	}

	public void setRechargePlan(String rechargePlan) {
		this.rechargePlan = rechargePlan;
	}

	public Integer getRechargePrice() {
		return rechargePrice;
	}

	public void setRechargePrice(Integer rechargePrice) {
		this.rechargePrice = rechargePrice;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
		
}
