package com.crud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.backend.model.Guest;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long>{
    
}
 