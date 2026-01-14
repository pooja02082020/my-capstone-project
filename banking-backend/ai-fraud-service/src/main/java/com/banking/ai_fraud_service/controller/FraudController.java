package com.banking.ai_fraud_service.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banking.ai_fraud_service.dtos.FraudRequest;
import com.banking.ai_fraud_service.dtos.FraudResponse;
import com.banking.ai_fraud_service.service.FraudScoringService;

@RestController
@RequestMapping("/fraud")
public class FraudController {

    private final FraudScoringService fraudScoringService;

    public FraudController(FraudScoringService fraudScoringService) {
        this.fraudScoringService = fraudScoringService;
    }

    @PostMapping("/score")
    public FraudResponse score(@RequestBody FraudRequest request) {
        return fraudScoringService.calculateRisk(request);
    }
}
