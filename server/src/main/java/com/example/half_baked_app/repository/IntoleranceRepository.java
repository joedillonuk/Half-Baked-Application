package com.example.half_baked_app.repository;

import com.example.half_baked_app.models.Intolerance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntoleranceRepository extends JpaRepository<Intolerance, Long> {
}
