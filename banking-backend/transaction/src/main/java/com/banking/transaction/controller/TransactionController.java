package com.banking.transaction.controller;

import java.util.List;
import java.util.UUID;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.transaction.dto.*;
import com.banking.transaction.model.TransactionStatus;
import com.banking.transaction.service.TransactionService;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    @PostMapping("/deposit")
    public ResponseEntity<TransactionResponse> deposit(
            @Valid @RequestBody DepositRequest dto) {
        return ResponseEntity.ok(service.deposit(dto));
    }

    @PostMapping("/withdraw")
    public ResponseEntity<TransactionResponse> withdraw(
            @Valid @RequestBody WithdrawRequest dto) {
        return ResponseEntity.ok(service.withdraw(dto));
    }

    @PostMapping("/transfer")
    public ResponseEntity<TransactionResponse> transfer(
            @Valid @RequestBody TransferRequest dto) {
        return ResponseEntity.ok(service.transfer(dto));
    }

    @GetMapping("/history/{accountId}")
    public ResponseEntity<List<TransactionResponse>> history(
            @PathVariable UUID accountId) {
        return ResponseEntity.ok(service.getHistory(accountId));
    }

    @GetMapping("/{txnId}")
    public ResponseEntity<TransactionResponse> getById(
            @PathVariable UUID txnId) {
        return ResponseEntity.ok(service.getByTransactionId(txnId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<TransactionResponse>> getAll() {
        return ResponseEntity.ok(service.getAllTransactions());
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<TransactionResponse>> getByStatus(
            @PathVariable TransactionStatus status) {
        return ResponseEntity.ok(service.getByStatus(status));
    }
}
