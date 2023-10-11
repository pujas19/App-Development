package com.supermarket.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.entities.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer> {

}
