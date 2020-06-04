package com.jet.eacloud.demo.springboot.eforms.dao;

import java.io.Serializable;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class JpaDAO<T extends Serializable> {

	@PersistenceContext
	EntityManager entityManager;

	public T findOne(Class<T> clazz, Long id) {
		return entityManager.find(clazz, id);
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll(Class<T> clazz) {
		return entityManager.createQuery("from " + clazz.getName()).getResultList();
	}

	public void save(T entity) {
		entityManager.persist(entity);
	}

	public void update(T entity) {
		entityManager.merge(entity);
	}

	public void delete(T entity) {
		entityManager.remove(entity);
	}

	public void deleteById(Class<T> clazz, Long entityId) {
		T entity = findOne(clazz, entityId);
		delete(entity);
	}
}