package com.crud.backend.controller;

import java.util.List;

import com.crud.backend.model.Guest;
import com.crud.backend.repository.GuestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class GuestController {

    @Autowired
    private GuestRepository guestRepository;

    @GetMapping("/guests")
    public List<Guest> getAllGuests() {
        return guestRepository.findAll();
    }

    @PostMapping("/guests")
    public Guest createGuest(@RequestBody Guest guest) {
        return guestRepository.save(guest);
    }
}
