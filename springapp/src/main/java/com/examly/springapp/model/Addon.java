package com.examly.springapp.model;

import javax.persistence.*;

@Entity
@Table(name="addon_model")
public class Addon {

	@Id
<<<<<<< HEAD
	@Column(name="addon_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	@Column(name="addon_name")
	private String addonName;
=======
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column(name="addon_name")
	private String addonName;
	@Column(name="addon_type")
	private String addonType;
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
	@Column(name="addon_price")
	private Integer addonPrice;
	@Column(name="addon_details")
	private String addonDetails;
<<<<<<< HEAD
=======
	@Column(name="addon_validity")
	private String addonValidity;
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
	
	public Addon() {
		
	}
<<<<<<< HEAD
	public Addon(Integer id, String addonName, Integer addonPrice, String addonDetails) {
		
		this.id = id;
		this.addonName = addonName;
		this.addonPrice = addonPrice;
		this.addonDetails = addonDetails;
=======
	public Addon(Integer id, String addonName, Integer addonPrice, String addonType, String addonValidity, String addonDetails) {
		
		this.id = id;
		this.addonName = addonName;
		this.addonType = addonType;
		this.addonPrice = addonPrice;
		this.addonDetails = addonDetails;
		this.addonValidity = addonValidity;
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
	}
	public Integer getAddonId() {
		return id;
	}
	public void setAddonId(Integer id) {
		this.id = id;
	}
<<<<<<< HEAD
	public String getAddonNanme() {
		return addonName;
	}
	public void setAddonNanme(String addonName) {
		this.addonName = addonName;
	}
=======
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
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
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
<<<<<<< HEAD
	}	
	
=======
	}
	public String getAddonValidity() {
		return addonValidity;
	}
	public void setAddonValidity(String addonValidity) {
		this.addonValidity = addonValidity;
	}	
	
	
>>>>>>> b23a2efd038dcd365805cc7227f3c2d60229cd13
}