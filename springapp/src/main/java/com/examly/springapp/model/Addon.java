package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="addon_model")
public class Addon {

	@Id
	@Column(name="addon_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	@Column(name="addon_name")
	private String addonName;
	@Column(name="addon_price")
	private Integer addonPrice;
	@Column(name="addon_details")
	private String addonDetails;
	
	public Addon() {
		
	}
	public Addon(Integer id, String addonName, Integer addonPrice, String addonDetails) {
		
		this.id = id;
		this.addonName = addonName;
		this.addonPrice = addonPrice;
		this.addonDetails = addonDetails;
	}
	public Integer getAddonId() {
		return id;
	}
	public void setAddonId(Integer id) {
		this.id = id;
	}
	public String getAddonNanme() {
		return addonName;
	}
	public void setAddonNanme(String addonName) {
		this.addonName = addonName;
	}
	public Integer getAddonPrice() {
		return addonPrice;
	}
	public void setAddonPrice(Integer addonPrice) {
		this.addonPrice = addonPrice;
	}
	public String getAddonDetails() {
		return addonDetails;
	}
	public void setAddonDetails(String addonDetails) {
		this.addonDetails = addonDetails;
	}	
	
}