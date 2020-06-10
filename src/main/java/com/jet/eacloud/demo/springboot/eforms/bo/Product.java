package com.jet.eacloud.demo.springboot.eforms.bo;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Product implements Serializable {
	private static final long serialVersionUID = 3924016404217086477L;

	@Id
	@Column(nullable = false, length = 256)
	private String productId;

	private String categoryId;

	@Column(nullable = false, length = 256)
	private String productName;
	@Column(nullable = true, length = 1024)
	private String productDescription;

	@Column(nullable = true, length = 1024)
	private String productImageURL;

	@Column(nullable = true, length = 100)
	private String unitType;

	private double unitCost;

	private boolean active;

	private Timestamp lastUpdated;

	private Integer productChangeLogId;

	@ManyToOne
	@JoinColumn(name = "categoryId", insertable = false, updatable = false)
	private Category category;

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public boolean isActive() {
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getProductImageURL() {
		return productImageURL;
	}

	public void setProductImageURL(String productImageURL) {
		this.productImageURL = productImageURL;
	}

	public String getUnitType() {
		return unitType;
	}

	public void setUnitType(String unitType) {
		this.unitType = unitType;
	}

	public double getUnitCost() {
		return unitCost;
	}

	public void setUnitCost(double unitCost) {
		this.unitCost = unitCost;
	}

	public Integer getProductChangeLogId() {
		return productChangeLogId;
	}

	public void setProductChangeLogId(Integer productChangeLogId) {
		this.productChangeLogId = productChangeLogId;
	}

}