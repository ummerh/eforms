package com.jet.eacloud.demo.springboot.eforms.api;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.Product;
import com.jet.eacloud.demo.springboot.eforms.repo.ProductRepository;

@RestController
public class ProductAPI {

	@Autowired
	ProductRepository productRepository;

	@RequestMapping("/api/products")
	public Iterable<Product> getAll() {
		return productRepository.findAll(Sort.by("productName"));
	}

	@RequestMapping("/api/categories/{id}/products")
	public List<Product> getAllByCategory(@PathVariable Integer id) {
		return productRepository.findByCategoryIdOrderByProductName(id);
	}

	@RequestMapping("/api/products/{id}")
	public Product getById(@PathVariable Integer id) {
		return productRepository.findById(id).get();
	}

	@RequestMapping(value = "/api/products", method = RequestMethod.POST)
	public Product post(@RequestBody Product rec) {
		rec.setLastUpdated(new Timestamp(System.currentTimeMillis()));
		productRepository.save(rec);
		return rec;
	}

	@RequestMapping(value = "/api/products/{id}", method = RequestMethod.PUT)
	public Product put(@PathVariable Integer id, @RequestBody Product rec) {
		Product old = productRepository.findById(id).get();
		if (old != null) {
			rec.setProductId(id.intValue());
			rec.setLastUpdated(new Timestamp(System.currentTimeMillis()));
			productRepository.save(rec);
		}
		return rec;
	}
}