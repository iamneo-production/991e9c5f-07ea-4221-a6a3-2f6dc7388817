package com.examly.springapp.model;

public class LoginResponse {

	private boolean success;
    private String role;
    private Long userId;
    
    public LoginResponse() {
    	
    }
	public LoginResponse(boolean success, String role, Long userId) {
		this.success = success;
		this.role = role;
		this.userId = userId;
	}
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	
}