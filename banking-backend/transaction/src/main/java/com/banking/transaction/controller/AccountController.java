package com.banking.transaction.controller;

import java.util.List;
import java.util.UUID;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.transaction.dto.AccountResponse;
import com.banking.transaction.dto.CreateAccountRequest;
import com.banking.transaction.service.AccountService;

@RestController
@RequestMapping("/transactions/accounts")
public class AccountController {

    private final AccountService service;

    public AccountController(AccountService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<AccountResponse> create(
            @Valid @RequestBody CreateAccountRequest dto) {
        return new ResponseEntity<>(service.createAccount(dto), HttpStatus.CREATED);
    }

    @GetMapping("/{accountId}")
    public ResponseEntity<AccountResponse> getById(@PathVariable UUID accountId) {
        return ResponseEntity.ok(service.getAccountById(accountId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AccountResponse>> getByUser(@PathVariable UUID userId) {
        return ResponseEntity.ok(service.getAccountsByUser(userId));
    }

    @PutMapping("/{accountId}/close")
    public ResponseEntity<Void> close(@PathVariable UUID accountId) {
        service.closeAccount(accountId);
        return ResponseEntity.noContent().build();
    }
}
