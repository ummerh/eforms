package com.jet.eacloud.demo.springboot.eforms.api;

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

@RestController
public class ProductChangeLogAPI {

	@Autowired
	ProductChangeLogRepository productLogRepository;

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