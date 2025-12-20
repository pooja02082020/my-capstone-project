package com.banking.transaction.dto;

import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class TransferRequest {

    @NotNull(message = "From account ID is required")
    private UUID fromAccountId;

    @NotNull(message = "To account ID is required")
    private UUID toAccountId;

    @NotNull(message = "Amount is required")
    @Min(value = 1, message = "Transfer amount must be greater than zero")
    private Double amount;

	public UUID getFromAccountId() {
		return fromAccountId;
	}

	public void setFromAccountId(UUID fromAccountId) {
		this.fromAccountId = fromAccountId;
	}

	public UUID getToAccountId() {
		return toAccountId;
	}

	public void setToAccountId(UUID toAccountId) {
		this.toAccountId = toAccountId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}
    
    

}
