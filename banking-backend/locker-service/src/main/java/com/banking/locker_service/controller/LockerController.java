package com.banking.locker_service.controller;

import com.banking.locker_service.dto.*;
import com.banking.locker_service.model.Locker;
import com.banking.locker_service.service.LockerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lockers")
public class LockerController {

    private final LockerService service;

    public LockerController(LockerService service) {
        this.service = service;
    }

    // Employee
    @GetMapping("/available")
    public List<Locker> availableLockers() {
        return service.getAvailableLockers();
    }

    // Employee
    @PostMapping("/assign")
    public void assignLocker(@RequestBody AssignLockerRequest request) {
        service.assignLocker(request);
    }

    // Customer
    @GetMapping("/user/{userId}")
    public LockerAuditResponse getUserLocker(@PathVariable Long userId) {
        return service.getUserLocker(userId);
    }

    // Employee
    @PutMapping("/{lockerId}/release")
    public void releaseLocker(@PathVariable Long lockerId) {
        service.releaseLocker(lockerId);
    }
}
