package com.jet.eacloud.demo.springboot.eforms.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.Customer;
import com.jet.eacloud.demo.springboot.eforms.repo.CustomerRepository;

@RestController
public class CustomerAPI {

	@Autowired
	CustomerRepository customerRepository;

	@RequestMapping("/api/customers")
	public Iterable<Customer> getAll() {
		return customerRepository.findAll(Sort.by("firstName"));
	}

	@RequestMapping("/api/customers/{id}")
	public Customer getById(@PathVariable String id) {
		return customerRepository.findById(id).get();
	}

	@RequestMapping(value = "/api/customers", method = RequestMethod.POST)
	public Customer post(@RequestBody Customer rec) {
		customerRepository.save(rec);
		return rec;
	}

	@RequestMapping(value = "/api/customers/{id}", method = RequestMethod.PUT)
	public Customer put(@PathVariable String id, @RequestBody Customer rec) {
		Customer old = customerRepository.findById(id).get();
		if (old != null) {
			rec.setCustomerId(id);
			customerRepository.save(rec);
		}
		return rec;
	}
}