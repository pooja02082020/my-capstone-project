package com.banking.ai_fraud_service.dtos;

import lombok.Data;

@Data
public class FraudRequest {

	private Long transactionId;
	private Long userId;

	private double amount;

	// Simple behavior stats (sent from transaction service)
	private int txnCountLastHour;
	private double avgTxnAmountLast30Days;

	private String location;
	private String deviceId;

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getTxnCountLastHour() {
		return txnCountLastHour;
	}

	public void setTxnCountLastHour(int txnCountLastHour) {
		this.txnCountLastHour = txnCountLastHour;
	}

	public double getAvgTxnAmountLast30Days() {
		return avgTxnAmountLast30Days;
	}

	public void setAvgTxnAmountLast30Days(double avgTxnAmountLast30Days) {
		this.avgTxnAmountLast30Days = avgTxnAmountLast30Days;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

}
