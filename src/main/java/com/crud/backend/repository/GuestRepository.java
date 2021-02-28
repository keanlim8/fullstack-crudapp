package com.crud.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.backend.model.Guest;

public interface GuestRepository extends JpaRepository<Guest, Long>{
    
}
 