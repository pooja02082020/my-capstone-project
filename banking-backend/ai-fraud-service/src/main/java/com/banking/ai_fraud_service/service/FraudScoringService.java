package com.banking.ai_fraud_service.service;

import org.springframework.stereotype.Service;

import com.banking.ai_fraud_service.dtos.FraudRequest;
import com.banking.ai_fraud_service.dtos.FraudResponse;

@Service
public class FraudScoringService {

    public FraudResponse calculateRisk(FraudRequest request) {

        double score = 0.0;

        // Rule 1: Large amount compared to average
        if (request.getAmount() > request.getAvgTxnAmountLast30Days() * 3) {
            score += 0.4;
        }

        // Rule 2: Too many transactions in short time
        if (request.getTxnCountLastHour() > 5) {
            score += 0.3;
        }

        // Rule 3: Very large single transaction
        if (request.getAmount() > 5000) {
            score += 0.4;
        }

        if (score > 1.0) score = 1.0;

        if (score >= 0.7) {
        } else if (score >= 0.4) {
        } else {
        }

        return new FraudResponse();
    }
}
