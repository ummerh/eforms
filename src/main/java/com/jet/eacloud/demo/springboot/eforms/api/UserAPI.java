package com.jet.eacloud.demo.springboot.eforms.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.User;
import com.jet.eacloud.demo.springboot.eforms.repo.UserRepository;

@RestController
public class UserAPI {

	@Autowired
	UserRepository userRepository;

	@RequestMapping("/api/users")
	public Iterable<User> getAll() {
		return userRepository.findAll(Sort.by("firstName"));
	}

	@RequestMapping("/api/users/{id}")
	public User getById(@PathVariable String id) {
		return userRepository.findById(id).get();
	}

	@RequestMapping(value = "/api/users", method = RequestMethod.POST)
	public User post(@RequestBody User rec) {
		userRepository.save(rec);
		return rec;
	}

	@RequestMapping(value = "/api/users/{id}", method = RequestMethod.PUT)
	public User put(@PathVariable String id, @RequestBody User rec) {
		User old = userRepository.findById(id).get();
		if (old != null) {
			rec.setUserId(id);
			userRepository.save(rec);
		}
		return rec;
	}
}