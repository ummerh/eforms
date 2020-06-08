package com.jet.eacloud.demo.springboot.eforms.bo;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Category implements Serializable {
	@Id
	@Column(nullable = false, length = 256)
	private String categoryId;
	@Column(nullable = false, length = 256)
	private String categoryName;
	@Column(nullable = true, length = 1024)
	private String categoryDescription;
	private boolean active;
	private Timestamp lastUpdated;
	@Column(nullable = true, length = 1024)
	private String categoryImageURL;

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryDescription() {
		return categoryDescription;
	}

	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}

	public boolean getActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Timestamp getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Timestamp lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public String getCategoryImageURL() {
		return categoryImageURL;
	}

	public void setCategoryImageURL(String categoryImageURL) {
		this.categoryImageURL = categoryImageURL;
	}

}