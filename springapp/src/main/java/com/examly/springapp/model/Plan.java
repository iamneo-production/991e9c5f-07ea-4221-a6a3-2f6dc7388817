package com.examly.springapp;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "planlist")
public class Plan {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "plan_id")
    private Long id;

    @Column(name = "plan_type")
    private String planType;

    @Column(name = "plan_name")
    private String planName;

    @Column(name = "plan_validity")
    private String planValidity;

    @Column(name = "plan_details")
    private String planDetails;

    @Column(name = "plan_price")
    private String planPrice;

    @Column(name = "plan_offers")
    private String planOffer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlanType() {
        return planType;
    }

    public void setPlanType(String planType) {
        this.planType = planType;
    }

    public String getPlanName() {
        return planName;
    }

    public void setPlanName(String planName) {
        this.planName = planName;
    }

    public String getPlanValidity() {
        return planValidity;
    }

    public void setPlanValidity(String planValidity) {
        this.planValidity = planValidity;
    }

    public String getPlanDetails() {
        return planDetails;
    }

    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }

    public String getPlanPrice() {
        return planPrice;
    }

    public void setPlanPrice(String planPrice) {
        this.planPrice = planPrice;
    }

    public String getPlanOffer() {
        return planOffer;
    }

    public void setPlanOffer(String planOffer) {
        this.planOffer = planOffer;
    }
    
}

