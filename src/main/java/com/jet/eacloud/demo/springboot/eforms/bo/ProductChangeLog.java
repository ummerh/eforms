package com.jet.eacloud.demo.springboot.eforms.bo;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ProductChangeLog implements Serializable {

	private static final long serialVersionUID = -1809701901347048756L;

	public ProductChangeLog() {
	}

	public ProductChangeLog(Product product) {
		super();
		this.productId = product.getProductId();
		this.productName = product.getProductName();
		this.productDescription = product.getProductDescription();
		this.productImageURL = product.getProductImageURL();
		this.unitType = product.getUnitType();
		this.unitCost = product.getUnitCost();
		this.active = product.isActive();
		this.product = product;
	}

	@Id
	@Column(nullable = false, length = 256)
	private String productChangeLogId;

	@Column(nullable = false, length = 256)
	private String productId;

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

	@Column(nullable = false, length = 256)
	private String changeStatus;

	@Column(nullable = false, length = 256)
	private String changedBy;

	private Timestamp changeTs;

	@Column(nullable = false, length = 256)
	private String approvedBy;

	private Timestamp approvedTs;

	@Column(nullable = true, length = 1024)
	private String approverComment;

	@ManyToOne
	@JoinColumn(name = "productId", insertable = false, updatable = false)
	private Product product;

	@ManyToOne
	@JoinColumn(name = "approvedBy", insertable = false, updatable = false)
	private User approvedByUser;

	@ManyToOne
	@JoinColumn(name = "approvedBy", insertable = false, updatable = false)
	private User changedByUser;

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
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

	public String getProductChangeLogId() {
		return productChangeLogId;
	}

	public void setProductChangeLogId(String productChangeLogId) {
		this.productChangeLogId = productChangeLogId;
	}

	public String getChangedBy() {
		return changedBy;
	}

	public void setChangedBy(String changedBy) {
		this.changedBy = changedBy;
	}

	public Timestamp getChangeTs() {
		return changeTs;
	}

	public void setChangeTs(Timestamp changeTs) {
		this.changeTs = changeTs;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public Timestamp getApprovedTs() {
		return approvedTs;
	}

	public void setApprovedTs(Timestamp approvedTs) {
		this.approvedTs = approvedTs;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getChangeStatus() {
		return changeStatus;
	}

	public void setChangeStatus(String changeStatus) {
		this.changeStatus = changeStatus;
	}

	public User getApprovedByUser() {
		return approvedByUser;
	}

	public void setApprovedByUser(User approvedByUser) {
		this.approvedByUser = approvedByUser;
	}

	public User getChangedByUser() {
		return changedByUser;
	}

	public void setChangedByUser(User changedByUser) {
		this.changedByUser = changedByUser;
	}

	public String getApproverComment() {
		return approverComment;
	}

	public void setApproverComment(String approverComment) {
		this.approverComment = approverComment;
	}

}