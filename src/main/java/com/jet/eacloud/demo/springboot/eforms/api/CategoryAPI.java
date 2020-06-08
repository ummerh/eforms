package com.jet.eacloud.demo.springboot.eforms.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jet.eacloud.demo.springboot.eforms.bo.Category;
import com.jet.eacloud.demo.springboot.eforms.repo.CategoryRepository;

@RestController
public class CategoryAPI {

	@Autowired
	CategoryRepository categoryRepository;

	@RequestMapping("/api/categories")
	public Iterable<Category> getAll() {
		return categoryRepository.findAll(Sort.by("categoryName"));
	}

	@RequestMapping("/api/categories/{id}")
	public Category getById(@PathVariable String id) {
		return categoryRepository.findById(id).get();
	}

	@RequestMapping(value = "/api/categories", method = RequestMethod.POST)
	public Category post(@RequestBody Category rec) {
		categoryRepository.save(rec);
		return rec;
	}

	@RequestMapping(value = "/api/categories/{id}", method = RequestMethod.PUT)
	public Category put(@PathVariable String id, @RequestBody Category rec) {
		Category old = categoryRepository.findById(id).get();
		if (old != null) {
			rec.setCategoryId(id);
			categoryRepository.save(rec);
		}
		return rec;
	}
}