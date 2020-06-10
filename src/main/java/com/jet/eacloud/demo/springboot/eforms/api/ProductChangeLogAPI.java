package com.jet.eacloud.demo.springboot.eforms.api;

import java.sql.Timestamp;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.Product;
import com.jet.eacloud.demo.springboot.eforms.bo.ProductChangeLog;
import com.jet.eacloud.demo.springboot.eforms.repo.ProductChangeLogRepository;
import com.jet.eacloud.demo.springboot.eforms.repo.ProductRepository;

@RestController
public class ProductChangeLogAPI {

	@Autowired
	ProductChangeLogRepository productLogRepository;

	@Autowired
	ProductRepository productRepository;

	@RequestMapping("/api/productChangeLog")
	public Iterable<ProductChangeLog> getAll() {
		return productLogRepository.findAll(Sort.by("productName"));
	}

	@RequestMapping("/api/productChangeLog/changeStatus/{status}")
	public Iterable<ProductChangeLog> getAll(@PathVariable String status) {
		return productLogRepository.findByChangeStatusOrderByProductName(status);
	}

	@RequestMapping("/api/productChangeLog/{id}")
	public ProductChangeLog getById(@PathVariable String id) {
		return productLogRepository.findById(id).get();
	}

	@RequestMapping(value = "/api/productChangeLog", method = RequestMethod.POST)
	public ProductChangeLog post(@RequestBody ProductChangeLog rec) {
		productLogRepository.save(rec);
		return rec;
	}

	@RequestMapping(value = "/api/productChangeLog/{id}", method = RequestMethod.PUT)
	public ProductChangeLog put(@PathVariable String id, @RequestBody ProductChangeLog rec) {
		ProductChangeLog old = productLogRepository.findById(id).get();
		if (old != null) {
			rec.setProductChangeLogId(id);
			productLogRepository.save(rec);
			Product product = productRepository.findById(old.getProductId()).get();
			if (product != null) {
				product.setLastUpdated(new Timestamp(System.currentTimeMillis()));
				product.setProductName(rec.getProductName());
				product.setProductDescription(rec.getProductDescription());
				product.setUnitType(rec.getUnitType());
				product.setUnitCost(rec.getUnitCost());
				product.setProductImageURL(rec.getProductImageURL());
				product.setProductChangeLogId(rec.getProductChangeLogId());
				productRepository.save(product);
			}
		}
		return rec;
	}

	@RequestMapping(value = "/api/productChangeLog/init", method = RequestMethod.POST)
	public Product change(@RequestBody Product rec) {
		// create a change log for review and approval
		ProductChangeLog log = new ProductChangeLog(rec);
		log.setProductChangeLogId(UUID.randomUUID().toString());
		log.setChangeStatus("Initiated");
		productLogRepository.save(log);
		return rec;
	}
}