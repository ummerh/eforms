package com.jet.eacloud.demo.springboot.eforms.bo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User implements Serializable {
	private static final long serialVersionUID = 6354606795149153610L;

	@Id
	@Column(nullable = false, length = 256)
	private String userId;

	@Column(unique = true, nullable = false, length = 1024)
	private String userName;

	@Column(nullable = false, length = 256)
	private String firstName;

	@Column(nullable = false, length = 256)
	private String lastName;

	@Column(nullable = false, length = 256)
	private String email;

	@Column(nullable = false, length = 256)
	private String password;

	@Column(nullable = true, length = 256)
	private String roleName;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

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

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

}