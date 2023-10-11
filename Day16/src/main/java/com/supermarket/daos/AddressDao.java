package com.supermarket.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.entities.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Integer> {

}
