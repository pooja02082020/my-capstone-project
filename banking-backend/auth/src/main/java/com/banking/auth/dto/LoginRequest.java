package com.banking.auth.dto;

public class LoginRequest {
    public String email;
    public String username;
    public String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUserName(String userName) {
		this.username = userName;
	}
    
    
}
