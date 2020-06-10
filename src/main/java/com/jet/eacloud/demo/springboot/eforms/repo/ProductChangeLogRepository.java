package com.jet.eacloud.demo.springboot.eforms.repo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.ProductChangeLog;

public interface ProductChangeLogRepository extends PagingAndSortingRepository<ProductChangeLog, String> {
	public List<ProductChangeLog> findByChangeStatusOrderByProductName(String changeStatus);
}
