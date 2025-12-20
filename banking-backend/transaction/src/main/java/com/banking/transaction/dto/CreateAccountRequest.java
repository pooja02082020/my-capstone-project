package com.banking.transaction.dto;

import java.util.UUID;

import com.banking.transaction.model.AccountType;

import jakarta.validation.constraints.NotNull;

public class CreateAccountRequest {

    @NotNull(message = "User ID is required")
    private UUID userId;

    @NotNull(message = "Account type is required")
    private AccountType accountType;

	public UUID getUserId() {
		return userId;
	}

	public void setUserId(UUID userId) {
		this.userId = userId;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}
    
    

}
