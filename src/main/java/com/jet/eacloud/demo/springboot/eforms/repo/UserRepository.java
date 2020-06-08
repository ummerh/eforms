package com.jet.eacloud.demo.springboot.eforms.repo;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.jet.eacloud.demo.springboot.eforms.bo.User;

public interface UserRepository extends PagingAndSortingRepository<User, String> {

}
