package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Integer> {

}