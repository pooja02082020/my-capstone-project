package com.banking.transaction.dto;

import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class WithdrawRequest {

	@NotNull(message = "Account ID is required")
	private UUID accountId;

	@NotNull(message = "Amount is required")
	@Min(value = 1, message = "Withdraw amount must be greater than zero")
	private Double amount;

	public UUID getAccountId() {
		return accountId;
	}

	public void setAccountId(UUID accountId) {
		this.accountId = accountId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}
	
	

}
