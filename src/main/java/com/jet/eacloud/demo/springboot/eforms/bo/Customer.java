package com.jet.eacloud.demo.springboot.eforms.bo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer customerId;

	@Column(unique = true, nullable = false, length = 1024)
	private String shortName;

	@Column(nullable = false, length = 256)
	private String firstName;

	@Column(nullable = false, length = 256)
	private String lastName;

	@Column(nullable = false, length = 256)
	private String email;

	@Column(nullable = false, length = 256)
	private String password;

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
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

}