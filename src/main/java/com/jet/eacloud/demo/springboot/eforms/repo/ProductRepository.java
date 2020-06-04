package com.jet.eacloud.demo.springboot.eforms.repo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.Product;

public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {

	public List<Product> findByCategoryIdOrderByProductName(Integer categoryId);

}
