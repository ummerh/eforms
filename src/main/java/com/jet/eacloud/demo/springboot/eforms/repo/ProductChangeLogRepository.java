package com.jet.eacloud.demo.springboot.eforms.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.ProductChangeLog;

public interface ProductChangeLogRepository extends PagingAndSortingRepository<ProductChangeLog, String> {

}
