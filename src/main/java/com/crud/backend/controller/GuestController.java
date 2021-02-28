package com.crud.backend.controller;

import java.util.List;

import com.crud.backend.model.Guest;
import com.crud.backend.repository.GuestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class GuestController {
    
    @Autowired
    private GuestRepository guestRepository;

    //get all guests
    @GetMapping("/guests")
    public List<Guest> getAllGuest() {
        return guestRepository.findAll();
    }
}
