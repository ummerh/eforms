package com.jet.eacloud.demo.springboot.eforms.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.Customer;

public interface CustomerRepository extends PagingAndSortingRepository<Customer, Integer> {

}
