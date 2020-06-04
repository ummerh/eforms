package com.jet.eacloud.demo.springboot.eforms.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.Customer;
import com.jet.eacloud.demo.springboot.eforms.dao.JpaDAO;

@RestController
public class CustomerAPI {

	@Autowired
	private JpaDAO<Customer> jpaDao;

	@RequestMapping("/api/customers")
	public List<Customer> getAll() {
		return jpaDao.findAll(Customer.class);
	}

	@RequestMapping("/api/customers/{customerId}")
	public Customer getById(@PathVariable Long customerId) {
		return jpaDao.findOne(Customer.class, customerId);
	}

	@RequestMapping(value = "/api/customers", method = RequestMethod.POST)
	public Customer post(@RequestBody Customer customer) {
		jpaDao.save(customer);
		return customer;
	}

	@RequestMapping(value = "/api/customers/{customerId}", method = RequestMethod.PUT)
	public Customer put(@PathVariable Long customerId, @RequestBody Customer customer) {
		Customer old = jpaDao.findOne(Customer.class, customerId);
		if (old != null) {
			customer.setCustomerId(customerId.intValue());
			jpaDao.update(customer);
		}
		return customer;
	}

}