package com.banking.credit_card.dto;

import java.time.LocalDate;

import com.banking.credit_card.enums.CardStatus;

public class CreditCardResponse {

	private Long cardId;
	private String cardNumber;
	private Double creditLimit;
	private Double availableLimit;
	private CardStatus cardStatus;
	private LocalDate expiryDate;

	public Long getCardId() {
		return cardId;
	}

	public void setCardId(Long cardId) {
		this.cardId = cardId;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Double getCreditLimit() {
		return creditLimit;
	}

	public void setCreditLimit(Double creditLimit) {
		this.creditLimit = creditLimit;
	}

	public Double getAvailableLimit() {
		return availableLimit;
	}

	public void setAvailableLimit(Double availableLimit) {
		this.availableLimit = availableLimit;
	}

	public CardStatus getCardStatus() {
		return cardStatus;
	}

	public void setCardStatus(CardStatus cardStatus) {
		this.cardStatus = cardStatus;
	}

	public LocalDate getExpiryDate() {
		return expiryDate;
	}

	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}

}
