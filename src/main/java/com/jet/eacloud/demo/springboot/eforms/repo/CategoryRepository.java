package com.jet.eacloud.demo.springboot.eforms.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.Category;

public interface CategoryRepository extends PagingAndSortingRepository<Category, String> {

}
