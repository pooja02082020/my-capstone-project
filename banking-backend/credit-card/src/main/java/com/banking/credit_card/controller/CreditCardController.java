package com.banking.credit_card.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banking.credit_card.dto.ApplyCreditCardRequest;
import com.banking.credit_card.dto.CreditCardResponse;
import com.banking.credit_card.dto.PayBillRequest;
import com.banking.credit_card.dto.StatementResponse;
import com.banking.credit_card.service.CreditCardService;

@RestController
@RequestMapping("/credit-cards")
public class CreditCardController {

    private final CreditCardService service;

    public CreditCardController(CreditCardService service) {
        this.service = service;
    }

    // Apply for credit card
    @PostMapping("/apply")
    public ResponseEntity<CreditCardResponse> applyForCreditCard(
            @RequestBody ApplyCreditCardRequest request) {

        return new ResponseEntity<>(
                service.applyForCreditCard(request),
                HttpStatus.CREATED
        );
    }

    // Activate credit card
    @PutMapping("/{cardId}/activate")
    public ResponseEntity<CreditCardResponse> activateCard(
            @PathVariable Long cardId) {

        return ResponseEntity.ok(service.activateCard(cardId));
    }

    // Deactivate credit card
    @PutMapping("/{cardId}/deactivate")
    public ResponseEntity<CreditCardResponse> deactivateCard(
            @PathVariable Long cardId) {

        return ResponseEntity.ok(service.deactivateCard(cardId));
    }

    // Get credit card details
    @GetMapping("/{cardId}")
    public ResponseEntity<CreditCardResponse> getCardDetails(
            @PathVariable Long cardId) {

        return ResponseEntity.ok(service.getCardDetails(cardId));
    }

    // Get all credit cards of a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CreditCardResponse>> getCardsByUser(
            @PathVariable Long userId) {

        return ResponseEntity.ok(service.getCardsByUser(userId));
    }

    // Pay credit card bill
    @PostMapping("/{cardId}/pay-bill")
    public ResponseEntity<Void> payBill(
            @PathVariable Long cardId,
            @RequestBody PayBillRequest request) {

        service.payBill(cardId, request);
        return ResponseEntity.ok().build();
    }

    // Get monthly statement
    @GetMapping("/{cardId}/statement")
    public ResponseEntity<StatementResponse> getMonthlyStatement(
            @PathVariable Long cardId) {

        return ResponseEntity.ok(service.getMonthlyStatement(cardId));
    }
}
