package com.banking.ai_fraud_service.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class FraudResponse {

    private double riskScore;      // 0.0 → 1.0
    private String decision;       // ALLOW / REVIEW / BLOCK
	public double getRiskScore() {
		return riskScore;
	}
	public void setRiskScore(double riskScore) {
		this.riskScore = riskScore;
	}
	public String getDecision() {
		return decision;
	}
	public void setDecision(String decision) {
		this.decision = decision;
	}
    
    
}
