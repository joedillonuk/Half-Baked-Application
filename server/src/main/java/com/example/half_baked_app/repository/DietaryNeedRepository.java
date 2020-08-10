package com.example.half_baked_app.repository;

import com.example.half_baked_app.models.DietaryNeed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DietaryNeedRepository extends JpaRepository<DietaryNeed, Long> {
}
