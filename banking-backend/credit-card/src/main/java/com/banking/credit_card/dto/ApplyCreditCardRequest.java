package com.banking.credit_card.dto;

public class ApplyCreditCardRequest {

	private Long userId;
	private Double requestedLimit;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Double getRequestedLimit() {
		return requestedLimit;
	}

	public void setRequestedLimit(Double requestedLimit) {
		this.requestedLimit = requestedLimit;
	}

}
