package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name="addon_model")
public class Addon {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name="addon_name")
	private String addonName;
	@Column(name="addon_type")
	private String addonType;
	@Column(name="addon_price")
	private Integer addonPrice;
	@Column(name="addon_details")
	private String addonDetails;
	@Column(name="addon_validity")
	private String addonValidity;
	
	public Addon() {
		
	}
	public Addon(Integer id, String addonName, Integer addonPrice, String addonType, String addonValidity, String addonDetails) {
		
		this.id = id;
		this.addonName = addonName;
		this.addonType = addonType;
		this.addonPrice = addonPrice;
		this.addonDetails = addonDetails;
		this.addonValidity = addonValidity;
	}
	public Integer getAddonId() {
		return id;
	}
	public void setAddonId(Integer id) {
		this.id = id;
	}
	public String getAddonName() {
		return addonName;
	}
	public void setAddonName(String addonName) {
		this.addonName = addonName;
	}
	
	public String getAddonType() {
		return addonType;
	}
	public void setAddonType(String addonType) {
		this.addonType = addonType;
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
	public String getAddonValidity() {
		return addonValidity;
	}
	public void setAddonValidity(String addonValidity) {
		this.addonValidity = addonValidity;
	}	
	
	
}