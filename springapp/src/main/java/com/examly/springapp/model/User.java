package com.examly.springapp.model;

import java.util.List;
import com.examly.springapp.model.Recharge;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;

@Entity
@Table(name="users1",
			uniqueConstraints = {
				@UniqueConstraint(columnNames="userName"),
				@UniqueConstraint(columnNames="email")
		})
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String email;
	private String role;
	private String userName;
	private String mobileNumber;
	private String password;
	private String confirmpassword;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonManagedReference
    private List<Recharge> rechargeModel;

    public User() {
		
	}
	
	public User(Long id, String email, String role, String userName, String mobileNumber, String password,
			String confirmpassword, List<Recharge> rechargeModel) {
		this.id = id;
		this.email = email;
		this.role = role;
		this.userName = userName;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.rechargeModel = rechargeModel;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	public List<Recharge> getRechargeModel() {
		return rechargeModel;
	}

	public void setRechargeModel(List<Recharge> rechargeModel) {
		this.rechargeModel = rechargeModel;
	}

}
