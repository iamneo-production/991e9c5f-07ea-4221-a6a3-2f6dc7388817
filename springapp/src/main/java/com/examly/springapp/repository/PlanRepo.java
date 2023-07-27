package com.examly.springapp.repository;
import com.examly.springapp.model.Plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepo extends JpaRepository<Plan, Long>{
    
}